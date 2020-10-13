--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
29	25	1	12000
30	25	3	12500
31	26	5	10000
32	26	5	10000
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
26	2020-10-13 11:15:43.024898-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
2	25	Evelyn Pei	12312398374239847	jkhfdkajhsdjfk	2020-10-13 11:11:00.259939-07
3	26	Evelyn Pei	fsdf	kjldkfjasdf	2020-10-13 11:16:22.022787-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Scent One: Hinoki	12000	/images/hinoki.jpg	Produced for Monocle by Comme des Garçons perfumer, Antoine Maisondieu, the inspiration for Hinoki comes from a perfectly still, slightly chilly spring morning spent soaking in an indoor/outdoor tub at the Tawaraya in Kyoto. It pulls together our memory of the mosses and trees outdoors and the sharp notes of the boxy hinoki tub.	Hinoki takes its name from the hinoki cypress, a tree that only grows in Japan and is the preferred wood for building palaces, temples, shrines and the finest wooden soaking baths. It was inspired by a visit to Tawaraya, a famous three-centuries-old traditional Japanese inn located in Kyoto. Soaking in the legendary open-air hinoki ofuro (wooden bath) filled with warm spring water on a chilly morning, the idea for the perfume was born and the result is breathtaking. The ofuro is captured perfectly: the full, rich scent of the wood, the smells of the surrounding greenery, the soft touch of meditative incense, the memories of native moss. Hinoki is a dry, woody-fresh scent with an intangible ”something” that gives it a mystical edge and the ability, much like CdGs Incense Series, to conjure the exact emotion and feel of the idea behind its creation and name.
4	Scent Four: Yoyogi	13000	/images/yoyogi.jpg	We’ve partnered with Comme des Garçons once more to develop our fourth scent: Yoyogi. Created in Paris by perfumer Nathalie Cetto, the fragrance was conceived by Monocle’s team and the fashion label’s Adrian Joffe before being perfected in the laboratory of Switzerland-based Givaudan. The appealing unisex scent takes its woody lead from cypress, freshly mown grass and wormwood and was designed to evoke the sensation of an early-morning run around its namesake: Yoyogi Park in Tokyo.	Yoyogi Park is one of the most beloved and celebrated green spaces in Tokyo. Nestled between the ultra-hip youth fashion mecca of Harajuku and the bustling social center of Shibuya, Yoyogi is a serene oasis, miles of soft grass, sparkling ponds, and the shade of gingko trees- a park for everyday Tokyo residents to congregate, relax, and play. Tyler Brûlé, the founder of Monocle Magazine, found himself inspired during his morning jogs there, and so with the help of Comme des Garcons he set out to create a scent that captures the unique feeling of natural serenity that can occur in one of the worlds busiest metropolises. And true to form, Yoyogi is a scent both serene and energetic, a perfect combination of soothing green notes resting on the negative space of the smoky, spicy cityscape beyond. Aromatic cypress lends a distinctly contemplative Japanese character, while the unmistakable crispness of freshly cut grass immediately puts us in Brûlés jogging shoes on a dewey morning, the sun still low in the sky, the park nearly deserted and silent. As sweet, herbaceous chamomile and bitter, resinous wormwood emerge in the latter stages, we begin to experience the park- and Tokyo- at midday, an escape from the traffic and hustle but still fundamentally at the centre of the city- the kind of modern touch CDG is beloved for. Serene and natural, modern and exciting, all at one- thats the undeniably striking effect of a single spray of Yoyogi.
5	Candle One: Hinoki	10000	/images/candle.jpg	The inspiration for our candle, made by Comme des Garçons in France, comes from a perfectly still, slightly chilly spring morning spent soaking in an indoor – or outdoor – tub in Kyoto. It is reminiscent of the moss and trees outside and the sharp notes of the boxy hinoki tub.	The inspiration for our candle, made by Comme des Garçons in France, comes from a perfectly still, slightly chilly spring morning spent soaking in an indoor – or outdoor – tub in Kyoto. It is reminiscent of the moss and trees outside and the sharp notes of the boxy hinoki tub.
6	Travel-Sized Toiletry Set	10000	/images/balm.jpg	We’ve collaborated with our favourite Welsh lavender farm to create a must-have travel-sized toiletry set, which comprises: hand cream, foot cream, face cream, lotion, scrub and body wash – all made using the best essential oils. Stay alert with the inclusion of an awake balm and wind down with their calm balm, both of which are made with a necessary combination of ingredients. Not to be sniffed at.	We’ve collaborated with our favourite Welsh lavender farm to create a must-have travel-sized toiletry set, which comprises: hand cream, foot cream, face cream, lotion, scrub and body wash – all made using the best essential oils. Stay alert with the inclusion of an awake balm and wind down with their calm balm, both of which are made with a necessary combination of ingredients. Not to be sniffed at.
3	Scent Three: Sugi	12500	/images/sugi.jpg	Sugi – also known as Japanese cedar – is popular as an ornamental plant in Japan and has a delicate, clean and energising fragrance. It is a refreshing scent that’s light but sophisticated, beginning with top notes of Mediterranean cypress and pepper from Madagascar, followed by iris from Florence and cedar from Virginia, and finished with pine and Haitian vetiver.	Sugi – also known as Japanese cedar – is popular as an ornamental plant in Japan and has a delicate, clean and energising fragrance. After the great success of our first collaborations with Comme des Garçons – Hinoki and Laurel – we have returned to them for this third scent, which has been developed in Paris by Antoine Maisondieu and comes in a Monocle-designed bottle and box. Its a refreshing unisex scent thats light but sophisticated, beginning with top notes of Mediterranean cypress and pepper from Madagascar, followed by iris from Florence and cedar from Virginia, and finished with pine and Haitian vetiver.
2	Scent Two: Laurel	12000	/images/laurel.jpg	Produced for Monocle by Comme des Garçons perfumer, Antoine Maisondieu, Laurel captures the scent and sensation enjoyed while staying with friends in Batroun, Lebanon. While many wonderful aromas drifted through their ancient garden, it was the distinctive scent of Laurel that punctuated an early spring weekend in the eastern Mediterranean. Laurel is warm, inviting and at times a little sharp - just like the country itself.	Lebanon has been popping up on the radar as one of the hippest travel destinations on the planet, and its no wonder the two trend-setters who already teamed up for the best-selling Hinoki, Comme des Garçons and Monocle magazine, found inspiration in the Country of the Cedars for their Scent Two. “We wanted to capture the same smell and sensation enjoyed while staying with friends in Batroun, Lebanon. Its warm, inviting and at times a little sharp – just like the country, ” says Monocle editor in chief, Tyler Brûlé.Cedar, then, obviously, tinged with incense – after all, “Lebanon” and “olibanum”, another name for frankincense, share the same etymology – and the namesake laurel (the antiseptic laurel bay essential oil is used in Lebanon to make the traditional, olive-oil based Alep soap). A dash of herbs sprinkled with pepper on a warm amber base infuse Laurel with a dry, bracing aroma that redefines the very notion of freshness perfumery. A stunning achievement.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 32, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 26, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 3, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

