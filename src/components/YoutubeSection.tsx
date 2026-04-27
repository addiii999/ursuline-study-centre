"use client";
import React from 'react';
import { Play, ExternalLink, ArrowRight } from 'lucide-react';

// Future Admin System Structure - Keeps it scalable
export interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  category: string;
}

// These can be replaced by an API call from an admin panel in the future
const featuredVideos: YouTubeVideo[] = [
  {
    id: '1',
    videoId: 'vR58BY1Ai0s',
    title: 'Ursuline Study Centre - Official Campus Tour & Highlights',
    category: 'Campus Tour',
  },
  {
    id: '2',
    videoId: 'vR58BY1Ai0s',
    title: 'Why Choose Ursuline Study Centre? Complete Guide to Facilities',
    category: 'Information',
  },
  {
    id: '3',
    videoId: 'vR58BY1Ai0s',
    title: 'Student Success Stories & Premium Educational Experience',
    category: 'Testimonials',
  }
];

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582 6.186a2.66 2.66 0 0 0-1.87-1.884C17.962 3.86 12 3.86 12 3.86s-5.962 0-7.712.442A2.66 2.66 0 0 0 2.418 6.186C1.968 7.95 1.968 12 1.968 12s0 4.05.45 5.814a2.66 2.66 0 0 0 1.87 1.884C6.038 20.14 12 20.14 12 20.14s5.962 0 7.712-.442a2.66 2.66 0 0 0 1.87-1.884C22.032 16.05 22.032 12 22.032 12s0-4.05-.45-5.814zM9.954 15.39V8.61l6.45 3.39-6.45 3.39z"/>
  </svg>
);

export default function YoutubeSection() {
  return (
    <section id="videos" className="section-py" style={{ background: 'var(--gray-soft)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-badge">Learning Resources</span>
          <h2 className="heading-lg" style={{ marginTop: '16px', marginBottom: '12px' }}>Featured Videos</h2>
          <span className="gold-divider" style={{ display: 'block', margin: '0 auto' }} />
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
            Discover our premium educational environment through our official video gallery.
          </p>
        </div>

        {/* Official Channel Banner (Permanent) */}
        <div style={{ marginBottom: '50px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://www.youtube.com/@academicorigin"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              padding: '20px 36px',
              background: 'var(--white)',
              border: '1px solid var(--gray-border)',
              borderRadius: '16px',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
            }}
            className="channel-banner-hover"
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(128,0,0,0.15)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.04)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-border)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#FF0000', color: 'white', flexShrink: 0, boxShadow: '0 4px 15px rgba(255,0,0,0.2)' }}>
              <YoutubeIcon size={28} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--gray-text)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                Official YouTube Channel
              </span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--black)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Academic Origin <ExternalLink size={18} style={{ color: 'var(--maroon)', opacity: 0.8 }} />
              </span>
            </div>
          </a>
        </div>

        {/* Video Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {featuredVideos.map((video) => {
            const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
            // Use hqdefault as it's more reliable across all videos, or mqdefault
            const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

            return (
              <a
                key={video.id}
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="video-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--white)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  border: '1px solid var(--gray-border)',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(128,0,0,0.1)';
                  const overlay = e.currentTarget.querySelector('.play-overlay') as HTMLElement;
                  if(overlay) {
                    overlay.style.background = 'rgba(0,0,0,0.4)';
                  }
                  const btn = e.currentTarget.querySelector('.play-btn') as HTMLElement;
                  if(btn) {
                    btn.style.transform = 'scale(1.1)';
                    btn.style.boxShadow = '0 6px 20px rgba(255,0,0,0.6)';
                  }
                  const title = e.currentTarget.querySelector('.video-title') as HTMLElement;
                  if(title) title.style.color = 'var(--maroon)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.04)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-border)';
                  const overlay = e.currentTarget.querySelector('.play-overlay') as HTMLElement;
                  if(overlay) {
                    overlay.style.background = 'rgba(0,0,0,0.1)';
                  }
                  const btn = e.currentTarget.querySelector('.play-btn') as HTMLElement;
                  if(btn) {
                    btn.style.transform = 'scale(1)';
                    btn.style.boxShadow = '0 4px 15px rgba(255,0,0,0.4)';
                  }
                  const title = e.currentTarget.querySelector('.video-title') as HTMLElement;
                  if(title) title.style.color = 'var(--black)';
                }}
              >
                {/* Thumbnail Area */}
                <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', background: '#e5e7eb', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {/* Play Button Overlay */}
                  <div 
                    className="play-overlay"
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    <div 
                      className="play-btn"
                      style={{
                        width: '64px',
                        height: '64px',
                        background: '#FF0000',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(255,0,0,0.4)',
                        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
                      }}
                    >
                      <Play size={28} style={{ marginLeft: '4px', fill: 'currentColor' }} />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--maroon)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  }}>
                    {video.category}
                  </div>
                </div>

                {/* Text Area */}
                <div style={{ padding: '24px' }}>
                  <h3 className="video-title" style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--black)', fontWeight: 700, lineHeight: 1.4, marginBottom: '16px', transition: 'color 0.2s', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {video.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    <YoutubeIcon size={18} /> Watch on YouTube <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
