
## ✨ Dulac Tarot ✨

This is a Next.js (React) web application incorporating AI generated text (via GPT-3 courtesy of OpenAI) and artwork (via the Disco Diffusion Collab notebook based in turn upon the CLIP notebook of Katherine Crowson).  User accounts are persisted by Next-Auth in a PostgreSQL database hosted by Heroku and wrapped with the Prisma ORM.  OAuth authentication via Google, Facebook, and email magic links are provided.  The native API provides information regarding the cards, their meanings, their artwork, and possible readings.  AWS S3 hosts the images, which are served via the AWS CloudFront CDN.

### Technologies Used:

✨ Next.js (React)
✨ PostgreSQL (Heroku)
✨ Next-Auth (Google, Facebook, Email Magic Links)
✨ Prisma 
✨ GPT-3 Playground
✨ Disco Diffusion AI Art
✨ AWS S3
✨ AWS CloudFront
