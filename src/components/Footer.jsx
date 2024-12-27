import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/megh_bari", label: "Twitter" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/megh-bari", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/Megh-bari-2b0700314/", label: "LinkedIn" },
  ];

  return (
    <div className="max-w-8xl mx-auto px-6 py-4">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-sm text-slate-400">
          Built by{' '}
          <a
            href="https://github.com/megh-bari"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-400 transition-colors"
          >
            <b>megh-bari</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
