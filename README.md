# Aun Abdi's Portfolio

Personal portfolio website for Aun Abdi, a Full-Stack Software Engineer based in the UK. This site showcases my professional work, technical blog posts about reading and software development, and personal projects.

Built with Next.js 15, TypeScript, and Once UI design system.

![Portfolio Homepage](public/images/og/home.jpg)

## About This Portfolio

This portfolio website features:
- **Professional Experience**: My work at Webexpenses and previous roles
- **Technical Skills**: Java, Python, TypeScript/JavaScript, Springboot, React, Node.js, Django, AWS, Azure, Docker
- **Blog**: Reading tips, book reviews, and developer reflections
- **Projects**: Personal development projects including BookTalkToday and Talim
- **Education**: MSc Computer Science & AI (in progress), coding bootcamp, and university background

## Tech Stack

- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Design System**: Once UI
- **Content**: MDX for blog posts and project pages
- **Styling**: SASS with Once UI tokens
- **Icons**: React Icons
- **Deployment**: Vercel-ready

## Local Development

**1. Install dependencies**
```bash
npm install
```

**2. Run development server**
```bash
npm run dev
```

**3. Build for production**
```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── blog/posts/          # Blog posts in MDX format
│   ├── work/projects/       # Project case studies in MDX
│   ├── about/               # About/CV page
│   └── gallery/             # Photo gallery
├── resources/
│   ├── content.tsx          # Main content configuration
│   ├── once-ui.config.ts    # Design system configuration
│   └── icons.ts             # Custom icon definitions
└── components/              # Reusable React components
```

Requires Node.js v18.17+.

## Features

- **Responsive Design**: Optimized for all screen sizes with a clean, professional layout
- **MDX Blog System**: Write blog posts with full markdown and React component support
- **Project Showcases**: Highlight development projects with detailed case studies
- **SEO Optimized**: Automatic open-graph and metadata generation for better discoverability
- **Social Integration**: Links to GitHub, LinkedIn, YouTube, and Podcast
- **Dynamic Content**: Easy content management through `src/resources/content.tsx`
- **Gallery Section**: Photo and visual content showcase
- **Performance**: Built with Next.js 15 for optimal loading speeds and SEO

## Content Management

To update the portfolio content:

1. **Personal Information**: Edit `src/resources/content.tsx` to update your details, experience, and skills
2. **Blog Posts**: Add new `.mdx` files to `src/app/blog/posts/`
3. **Projects**: Add new `.mdx` files to `src/app/work/projects/`
4. **Styling**: Customize design tokens in `src/resources/once-ui.config.ts`
5. **Icons**: Manage custom icons in `src/resources/icons.ts`

## Connect

- **Email**: aabdidevelopment@gmail.com
- **GitHub**: [@aunabdi1993](https://github.com/aunabdi1993)
- **LinkedIn**: [Aun Abdi](https://www.linkedin.com/in/aun-abdi-50785780/)
- **YouTube**: [@AunAbdi](https://www.youtube.com/@AunAbdi)
- **Podcast**: [Channel](https://www.youtube.com/channel/UCShjmLZLiMfnYs2Ea00IV5Q)

## Credits

This portfolio is built using the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template by [Once UI](https://once-ui.com).

Template created by Lorant One: [LinkedIn](https://www.linkedin.com/in/lorant-one/)

## License

Portfolio content and customizations: Copyright 2024 Aun Abdi

Base template distributed under CC BY-NC 4.0 License - see `LICENSE.txt` for details.