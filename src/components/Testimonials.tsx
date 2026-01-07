import { Card } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
    {
        "name": "abigai35",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Always a pleasure to work with this freelancer.  Does excellent work.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "abigai35",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "This seller solved an annoying problem for me quickly and correctly in one delivery.  They really know what they are doing, understood my request easily, and even provided helpful documentation without me requesting it.  Very satisfied with this purchase, and I will do business with again.   Thank you!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "ansolyquinonez",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5db185b4ad8c15aee75be2520a0b217f-1669629880762/8df15fa5-b8c8-4f18-8de3-fd84151f4a22.JPG",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thank you very much for your excellent work. The file is exactly what I needed.\nYour attention to detail is unmatched. My file was over 70,000 lines and there are no mistakes. Again, thank you for the attention to this matter.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "danielpuder",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thank you. Amazing job with a great turnaround!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "energysavers",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "would definitely work with again",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "lavellanight",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9d526e5041be0277fce87d3c0a821996-1548791175005/b77ff03a-a367-47d3-ad98-8151f718b390.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Always a pleasure working on projects together. Quick response and coding knowledge.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "reshmapatel118",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad S. delivered an OUTSTANDING performance that went beyond expectations, seamlessly converting files with impeccable code expertise. Not only was the delivery bug-free, but his responsiveness and high level of cooperation also made working with him a pleasure. 👍",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "lavellanight",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9d526e5041be0277fce87d3c0a821996-1548791175005/b77ff03a-a367-47d3-ad98-8151f718b390.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very good coding work. Quick response and delivery. Above expectations =)",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jennifersturges",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Got the job done correctly with very little time",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "greyfinch_jake",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great job! The work you did will save us hours!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "dreallday",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f88b322796819b5b1d6efd54f9954ba2-1741370052590/691e3079-43cf-4c27-b374-fb629759fffb.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Well done and properly executed",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "maxinnes695",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Professional, able to do a complex task quickly. Communicated every step of the way. Would use again 100%",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "sarabaldisseri",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7bfcd943b8c614f936792ba972b000a1-1969266141741367008.853771/FB5085F6-00FE-4E2A-AD76-0517AB36A926",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f9.png",
        "country": "Italy",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad did a fantastic job recovering data from 5 databases and converting the data into a readable file. He exceeded my expectations producing different files to different file extensions, so that I can flexibly read them with different programs. He also accommodated my request for a fast delivery. Super recommended! Thank you Hamad 🙏🤗",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "reshmapatel118",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad S. truly IMPRESSED with his file conversion service! His work was not only BUG FREE and highly professional but also exceeded expectations. With his proactive communication, timely delivery, and excellent language fluency, working with him was a seamless experience. Highly recommended! 👍",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "mauricejaffer",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c12e577c296c65f1606dc3b7072c602b-708814431706550977960/JPEG_20240129_185613_8105037296758071477.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad S. did an EXCEPTIONAL job with the file conversion by paying meticulous attention to details! Collaborating with him was seamless thanks to his language fluency and proactive communication. Highly recommend! 👍",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "mrbrianfuit",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Did a great job, Finished the project fast.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "bradyphillips65",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png",
        "country": "Australia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very quick work with no error. Thank you!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "rasmine2",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/57ef3ea2816b70c059374e26ee7f4188-1660735192272/52a4c825-ac05-451a-bb44-c5b6896812cd.jpeg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "I’m a repeat customer and as always I’m very happy with the results. He takes his time and allows me time to check the work. I will continue to use his services.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "reshmapatel118",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad S. delivered exceptional work with expert-level coding and thorough documentation — no bugs at all! His proactive communication and willingness to go above and beyond made our collaboration seamless and very pleasant. Highly RECOMMEND working with him! 👏",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "scottyotm",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1197570/original/Scott_Avatar",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Worked hard to get us the data we need.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "bboychua",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1fe.png",
        "country": "Malaysia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "well done, good work as usual",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "bboychua",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1fe.png",
        "country": "Malaysia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "well done thank you",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "dianekalensukra",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/56c8877b431f8657554fe3c79042b312-1613696311698008457.938638/A05EEE76-50D8-4994-A083-18A4F0EC7986",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad is brilliant, meticulous, reliable and super quick. He has my highest recommendation. And he’s a great person too!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "ansolyquinonez",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5db185b4ad8c15aee75be2520a0b217f-1669629880762/8df15fa5-b8c8-4f18-8de3-fd84151f4a22.JPG",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad S. truly exceeded my expectations in converting files! His documentation and code expertise were top-notch, and he showed incredible attention to detail. Additionally, his communication and timely delivery made the process seamless. Thank you very much for the excellent work, Hamad. The order was... See more",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "thekreatyr",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thank you, 500 JSON files delivered within 24 hours thank you!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "asafcadmon",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/199d7c8ca14e26c4d49a4339e2d1477e-1711173548785/0590f26c-2e65-4614-8104-3141674af9f8.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
        "country": "Israel",
        "platform": "Fiverr",
        "rating": "5",
        "text": "thank you.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "reshmapatel118",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "I needed help with formatting a CSV to XML file to be able to upload reviews in Google Merchant. Turn around time was superfast, uploaded to merchant center and was error free first time. Will definitely work with you again on future monthly updates, thank you!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "simoneiorio90",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f9.png",
        "country": "Italy",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad performed exceptionally well! His professionalism and code expertise were impressive, and his politeness and deep understanding made working together a pleasure. He truly went beyond what I anticipated—HIGHLY recommended! 💪",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "asinaanna",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Danke. Alles super! Gern wieder.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "povertylol",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad S. did an outstanding job converting my files! The work was bug-free and professional, showcasing his code expertise. Moreover, his politeness, prompt delivery, and deep understanding made working with him a pleasure. Highly recommend! 👍\n\nAI generated response because i'm not good with words,... See more",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "megaitys",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f0a8ccdcfbb84837c108cdb6609a1164-1036020141670928212617/JPEG_20221213_114331_5453744259188652792.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Super zufrieden! Meistert Komplexe Aufgaben hervorragend! Kann ich nur empfehlen! :)",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "teepsdsouza",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad was able to deliver the product with minimal instructions. I appreciate the quick turnaround and openess to make changes.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "marsuki185",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/150f33448a4b2eaa2066bbaccb651700-1474182131692390052999/JPEG_20230819_032052_1772620681263337530.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1e9.png",
        "country": "Indonesia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "smart and fast",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "alexgroome509",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c68042c84cc27ce36004eb3e05bbf31c-1743847184552/3b9daf80-9fdf-49ba-8295-8b49135cd663.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Exceptional advice, and went above and beyond before we even paid the guy! Now my NFT collection metadata is finally correct and my community are super happy! Thanks! Great communication and fast delivery!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "michaelbulriss",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "First time User Hamad and Fiver solved my no skills technical problem.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "aj_andreas",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1fe.png",
        "country": "Cyprus",
        "platform": "Fiverr",
        "rating": "4.7",
        "text": "Very satisfied with the results. We were looking to work with an expert who would deeply understand the task and the requirements and also be able to deliver in a short span of time. Thank you for your work.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "c65657",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d356706305339aecdeb15bfe562bf23e-1718643752627/8685ca0f-426a-4c69-bf1c-05ae0a629df4.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "This is literal magic. I just replaced every lead sheet with this vendor. well worth it and easy to work with will be using again thank you more than i could even image. Just wow. at this point, I have run out of things to say.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "mrrobbo",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/aa6f8fbfe9b9487876b80b4c942c8341-1665619561883/0e755c22-dc9d-414a-b3d0-fb6e37f6f26f.jpeg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ec.png",
        "country": "Singapore",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Excellent fast delivery.  Will be using for conversion tasks again",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "ewatsonrjw",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Delivered on time and per my requests.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "smartphone_quiz",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/aa22754e1b6da6b6726856c09e407eb5-1646843625810/458188a5-5e58-4fa7-860b-54a2dec18750.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Had a bespoke request here and I am really happy with the final product. The final product is amazing and can't wait to start some new projects!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "andregerdes",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2b67331de8b9ac299b12acdbf7aaa05f-1689583159574/f9679ea1-d11b-4643-8b0c-957e857d24ef.jpeg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Ich bin sehr sehr zufrieden",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "serhatapaydin",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/52b02a73706ed175e7719415a0098ceb-1681218312250/1853e636-601e-4c02-98f6-a8029d5d0648.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1f7.png",
        "country": "Turkey",
        "platform": "Fiverr",
        "rating": "5",
        "text": "He did exactly what I wanted, it is very fast and successful! You will definitely get what you want. Thanks again Hamad!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "hampie553",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ef99c26b8ed2ef4af18022b0c37e41b1-1667912943662/397a2df5-ffcc-4599-be5a-fc3d6f097ca7.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Good work!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "brendancroni898",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/06818679ccbdbbb73c7406da69575dcd-1687468935131/00754665-8bfe-4624-b9a7-ec9ea51f208f.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "I hired Hamad to build an automation tool. I'm not a very technical person, so at first the tool was difficult to understand and use. However he went the extra step and provided detailed documentation that made it easy for me to use the tool.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "gioltl",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png",
        "country": "France",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad and his team did a great job and were very understanding of my needs.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "dimavoznesensky",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8770493bcb4ff1caa26e2eb77559a4df-1706292737852/d45f0556-e90c-4235-abe3-4c3a86ad7bd3.jpeg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "First and foremost, the team showcased amazing skills in scraping. They were able to gather data from various sources with incredible precision and efficiency. Not only did they deliver exactly what I needed, but they also provided insights and suggestions that significantly improved the final outcome.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cwphilbin",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b3cf3b1ec6234ae6dee6f419f3c77482-1676140475218/989aa388-8ac0-4120-a0c1-6815cc931d44.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Worked with him several times and it has been fast, accurate, and easy every time. Highly recommend.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "moranic",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/94e7057e13eeb1d211f237c95b1275d6-1588068506532/d6124086-7a0a-401f-8d23-71376538c821.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f0-1f1ea.png",
        "country": "Kenya",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad is an exceptional Python developer who exceeded all expectations with his creation of a flawless JSON file. His professionalism, attention to detail, and expertise in Python programming were evident throughout the entire process. Not only did he deliver exactly what was requested, but he also demonstrated... See more",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cwphilbin",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b3cf3b1ec6234ae6dee6f419f3c77482-1676140475218/989aa388-8ac0-4120-a0c1-6815cc931d44.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Good quick work.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "gianpaolopat",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/58128173/original/14479727_10210559060163217_1923556828769658362_n.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f9.png",
        "country": "Italy",
        "platform": "Fiverr",
        "rating": "5",
        "text": "I think Hamad is very helpful for everythings",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "world007",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/730936ab4843981aa0651d529789df22-1629113066365/7516951b-24b2-405d-ae9c-8fc81dba406f.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great job will use again!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "dishooverflow",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/49756810fcf6d15ea3f304dc44572625-1691791589256/6e40f53f-91f8-479c-80ea-781a3b8c62e0.JPG",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "It was an absolute pleasure to work with Hamad! I am definitely going to come back to him again! Hamad's communication skills, efficiency, and his straight-to-the-point approach are exceptional qualities that I always look for in my work colleagues. He doesn't waste time and always delivers on his promises.... See more",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "bluerum",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Exceptional job. Patient. Appreciated his hard work troubleshooting any issues or concerns I had. Quick, quality work. I will use him again whenever possible. Highest recommendation.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "rogerescrow",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/318dcf7e12b81248267f896aad38c981-753973381595469903.165512/4C449A15-58CE-4F83-94FC-0015DCA3C16C",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "EXCELLENT SERVICE, SAME DAY DELIVERY!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "theseoagency1",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ca924701f054018d77ebb36dd4f9eba2-708228651676478134.871224/BEBA334C-109B-4B25-B16B-A5AB9C47AF72",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "EXCELLENT WORK VERY HAPPY",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jaimediaza",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1f4.png",
        "country": "Colombia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "all excellent work and communication",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "yasashiyuu",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1ea.png",
        "country": "United Arab Emirates",
        "platform": "Fiverr",
        "rating": "5",
        "text": "عمل طيب رغم المعوقات",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "leaparwell",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "well done, fast deliver! parsed my leads so fast! wa lilahil hamd",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jaimediaza",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1f4.png",
        "country": "Colombia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Excellent work and communication.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "isaktammo",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/fa00ca89563df3a32fe0bc396bf0d99b-1178999431656953457.800616/BAF00D52-686B-4259-9956-CBA4ACA485F4",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ea.png",
        "country": "Sweden",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Top seller, did complicated work within 10 minutes max!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "leanachan",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "He is the absolute best. I would recommend him for any project you have. Delivery was amazing.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "grantprice",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/24128522/original/photo.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Amazing work!  Highly recommend!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "rasmine2",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/57ef3ea2816b70c059374e26ee7f4188-1660735192272/52a4c825-ac05-451a-bb44-c5b6896812cd.jpeg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "This experience was truly amazing. The communication was easy and straightforward. The seller asked the appropriate questions to make sure he understood the assignment. He took his time and did the work right. I’m very pleased with the results and would highly recommend.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "marcusa599",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thanks for the great work",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "imarketable",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a8764bb052d7b43ed02fa5725cffef70-1729370681820/ec0c7b64-bc3f-4c81-8c62-89cc0d601cb1.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "very fast and professional",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "rpgsky",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Seller is very professional and completed the project quickly!   Minor requested revisions were accomplished with ease.  Thank you!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "catie_canada",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad was great to work with and delivered everything as promised!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "tvsmarketing",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1082567/original/travis-profile-pic.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Has a fairly large web scraping project that was done to perfection! And it was done quickly too. GREAT seller. Highly recommend!!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "quebecguitare",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3632e931c7853d6fd8866749b5769783-1723192636388/5ad07582-824c-4d99-a701-d9cd18afbd27.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1e9.png",
        "country": "Indonesia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Highly Recommended A+++++",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "oxctopus",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Rapid and efficient work",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "williamclare262",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "It was very good and I appreciate their help.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "csgroupinc",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Amazing Developer, would recommend",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "alexander6121",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1f0.png",
        "country": "Slovakia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Excellent work!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jweb123",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very fast and understood all requirements.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cjlopezariza",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1f4.png",
        "country": "Dominican Republic",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad always accomplish the task that I propose to him in a timely manner.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cjlopezariza",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1f4.png",
        "country": "Dominican Republic",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great always working with Hamad. Hamad has incredible talent. Very accommodative seller and will not abandon you even if the order is done.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "fey22123",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/73cfb10d5018a713423a8f6e43cbc167-805189261588183858.060184/B072494A-F230-441D-889A-EF0F76466C8C",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thanks Hamad!!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "sparks3333",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ea5696e5e46b5b48c3c4071ccf27f06b-1542357821691746530053/JPEG_20230811_043529_7938922804812622362.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "wonderful as always!!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "ddawsonallen",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great. They provided exactly what was expected.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cjlopezariza",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1f4.png",
        "country": "Dominican Republic",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad is a genius.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "sparks3333",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ea5696e5e46b5b48c3c4071ccf27f06b-1542357821691746530053/JPEG_20230811_043529_7938922804812622362.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "excellent work! 10/10 would reccommend!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "danzeled",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6d63178e83f4378d1890ca9f36b5b46c-1527023255540/21fcfad1-3344-4c9c-83bc-7c520d132761.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad is serious, proactive and professional. he helped me with my project and provided great support and amazing communication. I'll continue working with him with pleasure and recommend him with trust",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cjlopezariza",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1f4.png",
        "country": "Dominican Republic",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Accommodative provider. Very talentful with everything Python.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "brendancroni898",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/06818679ccbdbbb73c7406da69575dcd-1687468935131/00754665-8bfe-4624-b9a7-ec9ea51f208f.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Project was completed quickly and accurately. Will order from this seller again!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "davidratelband",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Awesome communication, great service.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "meslater",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very easy to work with and very knowledgeable. Quick responses, answered all our questions clearly. Work was error free and delivered early. Would definitely hire again.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "davidratelband",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Awesome delivery great service provider.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "barryawilhelm",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Fantastic and precise.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "echplug",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great work!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "pelewis",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Cheap, fast, and good",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "geosites",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very easy to work with. I ask for what I need and he sends it back. Quickly.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jacobschwarzman",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/63e94369f50e6ff79e9b539539bf3789-1705178484696/c22a623e-ba2f-4ee2-a361-797d80fad0d0.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great work and communication!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "world007",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/730936ab4843981aa0651d529789df22-1629113066365/7516951b-24b2-405d-ae9c-8fc81dba406f.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Did such a great job, I will continue to use this gig, fast and professional.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "mixage51",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a8b82013f8e915704aaa8f276c2eefb0-929475941649104503.649564/AFFFB56E-DEE6-4D1B-BA71-41EB4A4AA037",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png",
        "country": "France",
        "platform": "Fiverr",
        "rating": "5",
        "text": "A golden provider who really deserves all my gratitude, he really understands what I ask each time he is caring and always available thank you for that I would recommend his work and invite you to work with him without any worries. AN EXPERT IN HIS FIELD.\n\nTHANK YOU SO MUCH SIR.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "pmaier1997",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hamad created a complicated python script to extract and transform data from a huge xml file. He worked very fast, was always responsive and made changes to the script when i requested them. Will definitely order from him again, if the need arises",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "world007",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/730936ab4843981aa0651d529789df22-1629113066365/7516951b-24b2-405d-ae9c-8fc81dba406f.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very fast and does a great job, I will continue to use this gig for all my nfts",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "madavi_",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3f4de066e09dc78cd946f86305669739-1647874701513/21eee4a6-3728-4a3a-9af3-075a81b3fc03.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fc.png",
        "country": "Rwanda",
        "platform": "Fiverr",
        "rating": "5",
        "text": "It was great working with Hamad. Quite responsive and keen on delivering quality work.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "lotusgraphics2",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c4a732aff93805d92d597285ebda2f69-1675803322493/7adef676-61f7-41c2-b91f-ef8d29875872.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "great guy, straight forward. You can't go wrong!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "l57d11",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1ff.png",
        "country": "New Zealand",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Did exactly what I was after, and worked with me on a complex expression!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "isabellaker",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ce0e7a202b626fb06cc5a0d41df87684-1714733800457/fcd71f7c-a1c7-4d9f-b805-04c2828a25c8.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png",
        "country": "Australia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "very fast delivery",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "guro55",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bb0378b81e6c2110c5613803de45f030-1674058529415/a8df7b6f-3b2c-4bb4-8dc4-47f0ccb8e3ee.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very good job, thanks again.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "vundurty",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/53b9a0139cc38d302dbda0ce014b4de0-1679557855635/564a2a5a-0272-43f4-82c5-1e5cde8ec090.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png",
        "country": "India",
        "platform": "Fiverr",
        "rating": "5",
        "text": "This person is brilliant. He knows what he is doing and he is fast. Many people said it's a complex task but this person completed it in less than a 1hr. Highly recommended. :)",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "world007",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/730936ab4843981aa0651d529789df22-1629113066365/7516951b-24b2-405d-ae9c-8fc81dba406f.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great guy, did what I needed and did the revisions I needed, I will be back for more work!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "louisbrunner",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png",
        "country": "Switzerland",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Product was exactly what a wanted with the first try. Communication was great and the product was delivered very fast. Would recommend.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "guro55",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bb0378b81e6c2110c5613803de45f030-1674058529415/a8df7b6f-3b2c-4bb4-8dc4-47f0ccb8e3ee.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very good job. He works really fast. Thanks",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "shashankgupt855",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f1-1f1fa.png",
        "country": "Luxembourg",
        "platform": "Fiverr",
        "rating": "5",
        "text": "hamad is very patient in terms of solving problems and he helped me to get my final output. Highly recommended!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "vibhor6",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1ff.png",
        "country": "New Zealand",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great job.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "isabellaker",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ce0e7a202b626fb06cc5a0d41df87684-1714733800457/fcd71f7c-a1c7-4d9f-b805-04c2828a25c8.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png",
        "country": "Australia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "amazing work thank you!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "nimen001",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d92c45eb7cb2a252d5a6ca97a9f9753b-1645269862020/0fefed48-481d-44f3-9f1e-92e14daee121.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "country": "Germany",
        "platform": "Fiverr",
        "rating": "5",
        "text": "clean work, fast delivery, friendly dude :-)",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "paulrushing",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/4846443/original/1496698_10151918135222256_1903106607_n.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Did an outstanding job for me. What I asked for was outside of the original gigs scope but he pulled it off. Will use him again when the need arises.\n\nThanks..",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "mixage51",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a8b82013f8e915704aaa8f276c2eefb0-929475941649104503.649564/AFFFB56E-DEE6-4D1B-BA71-41EB4A4AA037",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png",
        "country": "France",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Really good work, he listens and stays until the job is done so I really recommend this person. \n\nThanks again. ++++",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "teamnocoloco",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png",
        "country": "India",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thank you for the great experience & modifications 🎉",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "rossmadrid",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1b8aba165035a59908becb1820f959af-1663750929234/d7964c72-4e9a-4686-bd98-2e750a6496ac.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1f8.png",
        "country": "Spain",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very good communication and fast service. Very recommend this service",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "teej101",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very straightforward. I love this seller.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "isabellaker",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ce0e7a202b626fb06cc5a0d41df87684-1714733800457/fcd71f7c-a1c7-4d9f-b805-04c2828a25c8.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png",
        "country": "Australia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Excellent seller fast service",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "user26450623",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1f8.png",
        "country": "Spain",
        "platform": "Fiverr",
        "rating": "5",
        "text": "This guy rocks with jsons",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "user26450623",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1f8.png",
        "country": "Spain",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very fast and good quality work, thank you so much",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "user26450623",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1f8.png",
        "country": "Spain",
        "platform": "Fiverr",
        "rating": "5",
        "text": "very fast and good to work with, i recommend hamadsaqib for his great work",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jmvelu",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f5-1f1e6.png",
        "country": "Panama",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thx very much",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "diramusafitness",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/af684f919bc7aa791bdf68ed50d2edf1-1653840658230/71ce6c53-c8b3-4124-be27-0a8042ff6375.jpeg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e7-1f1f7.png",
        "country": "Brazil",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Excelenr person and profesional.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "charlie5193quin",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ca8e0cc446b9e94556940033b752ddbd-1719543919462/5406343c-13b9-4a5a-b8e0-08a807a5c272.JPG",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png",
        "country": "Australia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "hamadsaqib did an amazing job scraping all the data I needed in such a quick time frame. Saved me countless hours! well worth the price I paid.\n\nThank you!\n\nWould recommend to anyone looking to get a job done well and save time.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "teej101",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Had an obscure Google Cloud/ Google Sheet task and Hamad was able to accomplish it quickly.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "randomdata",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/0f9aa455ebf8b530d76064d37a78de0a-1670984561032/af252285-ab5e-48c5-805a-9558279cf7e4.jpeg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "The Data Mining Was Of A Spectacular Quotation Code...",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "arceco",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png",
        "country": "Australia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "It was great working with Hamad. He was incredibly helpful - perhaps even more helpful than he needed to be. I will work with him again and i deeply appreciate his effort.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "nawar29",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5b49d95a3d789ad53c9eb99145ca2c58-1611733261791/29d4cea1-bfdb-48e3-a10f-bda8e7b3a637.JPG",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great work",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "realtorphotos",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7eb38535d0facb56b68b30bff176e8bc-1728306475167/a6cb0659-39a6-4ec2-a011-1d3e665a5427.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Hands down the absolute best to work with as far as communication, punctuality and extremely flexible on your requests. Hes on my favorites list now and will be my go to for any NFT project that I have!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "venturedigitalc",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ef05a8f2ff7f72c31d3ad33b7b23dab3-1696042587695/f7870a67-edd1-468e-808c-8161fc97b923.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Amazing as always",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "venturedigitalc",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ef05a8f2ff7f72c31d3ad33b7b23dab3-1696042587695/f7870a67-edd1-468e-808c-8161fc97b923.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Amazing as always",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "isabellaker",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ce0e7a202b626fb06cc5a0d41df87684-1714733800457/fcd71f7c-a1c7-4d9f-b805-04c2828a25c8.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png",
        "country": "Australia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "fast and reliable",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "venturedigitalc",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ef05a8f2ff7f72c31d3ad33b7b23dab3-1696042587695/f7870a67-edd1-468e-808c-8161fc97b923.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Amazing accuracy and turn around highly recommend",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "danielchavero",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1a87dfb2bc0f5ebcd49257c4f76e14f8-1629742905705/6c33acb5-c81f-4340-b295-0ed74cbce73c.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1fd.png",
        "country": "Mexico",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Its the 3rd time I use this services and I will keep doing it. All you can ask for: fast and professional!!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cmsimple1952",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Highly recomended",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "tim21david50",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Did an amazing job creating a script for me!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jimjacobus",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/4353710/original/Picture_019_copy.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Outstanding communication led to excellent work product!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "ilovediscord",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "He helped me and even explained what was wrong, very quick answers and extremely helpful",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "venturedigitalc",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ef05a8f2ff7f72c31d3ad33b7b23dab3-1696042587695/f7870a67-edd1-468e-808c-8161fc97b923.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great working with Hamad so quick and accurate, highly recommend.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "djmikeb",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3340e85539676cb5ce70f32a54bd3ced-1597415736148/ce0ec503-7eca-4346-96cf-fc145c8ee342.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "a+ script developer",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jessebrefeld",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Clear, Communication, fast delivery",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "avizandum",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "country": "United Kingdom",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Really fast work produced and communicated effectively",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "willynilly4",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very professional and reliable seller I've ever had! I will definitely order again.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jessebrefeld",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "4.3",
        "text": "Great working with Hamad, continuous support when needed.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jakegang",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/93ac2ec7713f63d33e2ab9e15b5416e1-1670943649052/97bc3b03-5bcb-4a92-a1ba-7cde4da90b44.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "great seller",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "djmikeb",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3340e85539676cb5ce70f32a54bd3ced-1597415736148/ce0ec503-7eca-4346-96cf-fc145c8ee342.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "I'm a repeat customer. His work ethic, communication, skill and quick responsiveness is top-notch",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "jakub_novak",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9d05ad7b99e7c87d862da887ba57f1d4-1658850271042/e85a9d03-2444-44a1-963e-92b15ae70ea7.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1f0.png",
        "country": "Slovakia",
        "platform": "Fiverr",
        "rating": "5",
        "text": "If you want a professional, I highly recommend this guy. Easy communication when specifying project details. Willing to help and also deliver the order in a short time. I highly recommend!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "danielchavero",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1a87dfb2bc0f5ebcd49257c4f76e14f8-1629742905705/6c33acb5-c81f-4340-b295-0ed74cbce73c.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1fd.png",
        "country": "Mexico",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Really good experience. I really recommend this guy. Fast delivery and easy to work",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "toukoofficiel",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7da681aefca475c0b0b48584eac6c0e0-1650474999229/f5a565b0-ccfe-4e22-9874-bdd4406f59f6.png",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png",
        "country": "France",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Good work bro, thanks",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "djmikeb",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3340e85539676cb5ce70f32a54bd3ced-1597415736148/ce0ec503-7eca-4346-96cf-fc145c8ee342.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "One of the best python script writers",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "chaseman1973",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/be15d7a81bae4dc22b0826d66a575c00-1707157492828/b757ab9d-e63b-49fe-916b-bfd2de179be8.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "hamadsaqib was a GREAT provider!  Looking forward to working with him again!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "speed_x",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Thank you great work!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "speed_x",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great Seller",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cancamiri",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very good work Hamad. Thanks for the great co-operation.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "loredana1",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8e4533856fa1b7d2bd2ccf54097f8d18-683252371606281257.353924/ED313FDB-BBF1-46FA-9B7A-6FD99ACD4E94",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f9.png",
        "country": "Italy",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Top very good",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "estonia_mac",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great seller thanks very much 100% recommended",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "punki1212",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f4.png",
        "country": "Norway",
        "platform": "Fiverr",
        "rating": "5",
        "text": "trust and cheap service",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "emanuelerosato",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/30c5b3eed9c40ed5fba0a4c7967aa364-1642510209544/eae95524-5a47-4e2d-8cd6-912b4fda8482.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f9.png",
        "country": "Italy",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Ottimo risultato, tempi fantastici, massima serietà",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cancamiri",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Perfect work.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cancamiri",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Perfect work",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cancamiri",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Perfect work.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "djmikeb",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3340e85539676cb5ce70f32a54bd3ced-1597415736148/ce0ec503-7eca-4346-96cf-fc145c8ee342.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "One of the best python script writers I know.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "djmikeb",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3340e85539676cb5ce70f32a54bd3ced-1597415736148/ce0ec503-7eca-4346-96cf-fc145c8ee342.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "He's the best and most responsive Python script writer",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "djmikeb",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3340e85539676cb5ce70f32a54bd3ced-1597415736148/ce0ec503-7eca-4346-96cf-fc145c8ee342.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "He is one of the best python script writers that I've hired so far. Very highly recommended.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "ajnichols92",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great work!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "djmikeb",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3340e85539676cb5ce70f32a54bd3ced-1597415736148/ce0ec503-7eca-4346-96cf-fc145c8ee342.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "country": "Canada",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Great to work with",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cancamiri",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very good. Good communication.",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "cancamiri",
        "image": "",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "country": "Netherlands",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Very good. Good communication!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "kamiolivier",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bfe5009036776666d988b2d057f55ce2-182263701586097920899/JPEG_20200405_164518_-2122298120.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fc.png",
        "country": "Rwanda",
        "platform": "Fiverr",
        "rating": "5",
        "text": "The seller is simply a genius. He has worked day and night and i am impressed with the final result",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "kamiolivier",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bfe5009036776666d988b2d057f55ce2-182263701586097920899/JPEG_20200405_164518_-2122298120.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fc.png",
        "country": "Rwanda",
        "platform": "Fiverr",
        "rating": "5",
        "text": "I am so happy with the seller, he did the job as described even better. He has a very good skills in coding and his communication was excellent",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "syngt5vr",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7edcec55de242eabfe8e3ad2a797e3ef-1644579587367/678d9808-7484-4d68-a14c-82616c6de8da.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Exceeded my expectations! Very easy to work with!",
        "link": "https://www.fiverr.com/hamadsaqib"
    },
    {
        "name": "syngt5vr",
        "image": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7edcec55de242eabfe8e3ad2a797e3ef-1644579587367/678d9808-7484-4d68-a14c-82616c6de8da.jpg",
        "country_url": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "country": "United States",
        "platform": "Fiverr",
        "rating": "5",
        "text": "Quick Delivery! Excellent to work with!",
        "link": "https://www.fiverr.com/hamadsaqib"
    }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Client Reviews</h2>
          <p className="text-muted-foreground text-xl font-light">
            What clients say about working with me
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee hover:pause-marquee">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] px-3">
                <Card className="p-6 glass-effect h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-sm leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Client info */}
                  <div className="flex flex-col items-center gap-3 border-t border-border pt-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-card flex items-center justify-center text-lg font-bold text-primary">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>  
                    )}
                    <div className="flex-grow">
                      <div className="font-semibold text-sm text-center">@{testimonial.name}</div>
                      <div className="text-xs text-center text-muted-foreground">
                        {testimonial.country}
                      </div>
                    </div>
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      {testimonial.platform}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </Card>
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
