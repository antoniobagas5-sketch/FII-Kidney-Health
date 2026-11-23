import React, { useEffect, useMemo, useState } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { getTranslations } from '../i18n/translations';
import { Language } from '../types';
import { ResilientImage } from './ResilientImage';

interface ClinicalVideoPlayerProps {
  language: Language;
  mediaUrl: string;
  thumbnailUrl: string;
  title: string;
  highlights?: string[];
}

const DEMO_DURATION_SECONDS = 30;

export const ClinicalVideoPlayer: React.FC<ClinicalVideoPlayerProps> = ({
  language,
  mediaUrl,
  thumbnailUrl,
  title,
  highlights,
}) => {
  const t = getTranslations(language).portfolio.videoPlayer;

  const isNativeVideo = useMemo(() => {
    const lower = mediaUrl.toLowerCase();
    return (
      lower.startsWith('blob:') ||
      lower.startsWith('data:video/') ||
      lower.endsWith('.mp4') ||
      lower.endsWith('.webm') ||
      lower.endsWith('.ogg')
    );
  }, [mediaUrl]);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (isNativeVideo || !isPlaying) return;

    const interval = window.setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= DEMO_DURATION_SECONDS) {
          setIsPlaying(false);
          return DEMO_DURATION_SECONDS;
        }
        return prev + 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isNativeVideo, isPlaying]);

  if (isNativeVideo) {
    return (
      <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden">
        <video
          src={mediaUrl}
          poster={thumbnailUrl}
          controls
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
        >
          {t.unsupported}
        </video>
      </div>
    );
  }

  const progressPercent = (currentTime / DEMO_DURATION_SECONDS) * 100;
  const activeCaptionIndex =
    highlights && highlights.length > 0
      ? Math.min(
          highlights.length - 1,
          Math.floor((currentTime / DEMO_DURATION_SECONDS) * highlights.length)
        )
      : 0;

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    const secs = Math.floor(sec % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleTogglePlay = () => {
    if (currentTime >= DEMO_DURATION_SECONDS) {
      setCurrentTime(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const handleReplay = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden select-none group">
      <div
        className={`w-full h-full transition-transform duration-1000 ease-out ${
          isPlaying ? 'scale-105' : 'scale-100'
        }`}
      >
        <ResilientImage
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Measured contrast scrim for video controls & highlights */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/40 pointer-events-none" />

      {/* Center play/pause overlay button when paused */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label={t.playAria}
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/95 text-[#0B2C5F] shadow-lg flex items-center justify-center hover:scale-105 transition-transform focus-visible:outline-2 focus-visible:outline-white"
        >
          <Play className="w-7 h-7 fill-current ml-0.5" />
        </button>
      )}

      {/* Bottom control bar */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col gap-3">
        {highlights && highlights.length > 0 && (
          <div className="bg-slate-950/75 backdrop-blur-sm border border-white/15 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white/95 max-w-2xl">
            {highlights[activeCaptionIndex]}
          </div>
        )}

        {/* Scrubber */}
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={0}
            max={DEMO_DURATION_SECONDS}
            value={currentTime}
            aria-label={t.scrubberAria}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
            className="w-full h-1.5 accent-[#1D63B8] cursor-pointer rounded-lg bg-white/25"
          />
        </div>

        <div className="flex items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? t.pauseAria : t.playAria}
              className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 fill-current" />
              )}
            </button>

            <button
              type="button"
              onClick={handleReplay}
              aria-label={t.replayAria}
              className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsMuted((prev) => !prev)}
              aria-label={isMuted ? t.unmuteAria : t.muteAria}
              className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <span className="text-xs font-medium tabular-nums text-slate-200 ml-1">
              {formatTime(currentTime)} / {formatTime(DEMO_DURATION_SECONDS)}
            </span>
          </div>

          <span className="text-xs text-slate-300 hidden sm:inline">
            {t.statusLabel(Math.round(progressPercent))}
          </span>
        </div>
      </div>
    </div>
  );
};
