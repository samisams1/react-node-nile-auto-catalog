--
-- nilesoftQL database dump
--

-- Dumped from database version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)

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

--
-- Name: autoepcrepair; Type: SCHEMA; Schema: -; Owner: nilesoft
--

CREATE SCHEMA autoepcrepair;


ALTER SCHEMA autoepcrepair OWNER TO nilesoft;

SET default_tablespace = '';



--
-- Name: SequelizeMeta; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE autoepcrepair."SequelizeMeta" OWNER TO nilesoft;

--
-- Name: categories; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE autoepcrepair.categories OWNER TO nilesoft;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE SEQUENCE autoepcrepair.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autoepcrepair.categories_id_seq OWNER TO nilesoft;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: autoepcrepair; Owner: nilesoft
--

ALTER SEQUENCE autoepcrepair.categories_id_seq OWNED BY autoepcrepair.categories.id;


--
-- Name: orderDetails; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair."orderDetails" (
    id integer NOT NULL,
    "orderId" integer NOT NULL,
    "productId" integer NOT NULL,
    status character varying(255) NOT NULL,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE autoepcrepair."orderDetails" OWNER TO nilesoft;

--
-- Name: orderDetails_id_seq; Type: SEQUENCE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE SEQUENCE autoepcrepair."orderDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autoepcrepair."orderDetails_id_seq" OWNER TO nilesoft;

--
-- Name: orderDetails_id_seq; Type: SEQUENCE OWNED BY; Schema: autoepcrepair; Owner: nilesoft
--

ALTER SEQUENCE autoepcrepair."orderDetails_id_seq" OWNED BY autoepcrepair."orderDetails".id;


--
-- Name: orders; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair.orders (
    id integer NOT NULL,
    "productId" integer NOT NULL,
    quantity integer NOT NULL,
    price double precision NOT NULL,
    status character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    country character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE autoepcrepair.orders OWNER TO nilesoft;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE SEQUENCE autoepcrepair.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autoepcrepair.orders_id_seq OWNER TO nilesoft;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: autoepcrepair; Owner: nilesoft
--

ALTER SEQUENCE autoepcrepair.orders_id_seq OWNED BY autoepcrepair.orders.id;


--
-- Name: products; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255),
    language character varying(255),
    region character varying(255),
    date timestamp with time zone,
    description character varying(255),
    imageurl character varying(255),
    price double precision,
    "subcategoryId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE autoepcrepair.products OWNER TO nilesoft;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE SEQUENCE autoepcrepair.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autoepcrepair.products_id_seq OWNER TO nilesoft;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: autoepcrepair; Owner: nilesoft
--

ALTER SEQUENCE autoepcrepair.products_id_seq OWNED BY autoepcrepair.products.id;


--
-- Name: screenshots; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair.screenshots (
    id integer NOT NULL,
    "productId" integer NOT NULL,
    "imageUrl" character varying(255) NOT NULL,
    status character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE autoepcrepair.screenshots OWNER TO nilesoft;

--
-- Name: screenshots_id_seq; Type: SEQUENCE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE SEQUENCE autoepcrepair.screenshots_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autoepcrepair.screenshots_id_seq OWNER TO nilesoft;

--
-- Name: screenshots_id_seq; Type: SEQUENCE OWNED BY; Schema: autoepcrepair; Owner: nilesoft
--

ALTER SEQUENCE autoepcrepair.screenshots_id_seq OWNED BY autoepcrepair.screenshots.id;


--
-- Name: subcategories; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair.subcategories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "categoryId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE autoepcrepair.subcategories OWNER TO nilesoft;

--
-- Name: subcategories_id_seq; Type: SEQUENCE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE SEQUENCE autoepcrepair.subcategories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autoepcrepair.subcategories_id_seq OWNER TO nilesoft;

--
-- Name: subcategories_id_seq; Type: SEQUENCE OWNED BY; Schema: autoepcrepair; Owner: nilesoft
--

ALTER SEQUENCE autoepcrepair.subcategories_id_seq OWNED BY autoepcrepair.subcategories.id;


--
-- Name: users; Type: TABLE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE TABLE autoepcrepair.users (
    id integer NOT NULL,
    "fullName" character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE autoepcrepair.users OWNER TO nilesoft;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: autoepcrepair; Owner: nilesoft
--

CREATE SEQUENCE autoepcrepair.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autoepcrepair.users_id_seq OWNER TO nilesoft;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: autoepcrepair; Owner: nilesoft
--

ALTER SEQUENCE autoepcrepair.users_id_seq OWNED BY autoepcrepair.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.categories ALTER COLUMN id SET DEFAULT nextval('autoepcrepair.categories_id_seq'::regclass);


--
-- Name: orderDetails id; Type: DEFAULT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair."orderDetails" ALTER COLUMN id SET DEFAULT nextval('autoepcrepair."orderDetails_id_seq"'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.orders ALTER COLUMN id SET DEFAULT nextval('autoepcrepair.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.products ALTER COLUMN id SET DEFAULT nextval('autoepcrepair.products_id_seq'::regclass);


--
-- Name: screenshots id; Type: DEFAULT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.screenshots ALTER COLUMN id SET DEFAULT nextval('autoepcrepair.screenshots_id_seq'::regclass);


--
-- Name: subcategories id; Type: DEFAULT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.subcategories ALTER COLUMN id SET DEFAULT nextval('autoepcrepair.subcategories_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.users ALTER COLUMN id SET DEFAULT nextval('autoepcrepair.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair."SequelizeMeta" (name) FROM stdin;
20240415101612-create_users_table.js
20240415173239-create_categories_table.js
20240415173823-create_subcategories_table.js
20240416184455-create_produts_table.js
20240420151223-create-order.js
20240422214039-create-screen-Shoot.js
20240422214336-create-order-details.js
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair.categories (id, name, "createdAt", "updatedAt") FROM stdin;
1	category1	2024-04-22 09:33:52.961+03	2024-04-22 09:33:52.961+03
2	category2	2024-04-22 11:22:56.674+03	2024-04-22 11:22:56.674+03
\.


--
-- Data for Name: orderDetails; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair."orderDetails" (id, "orderId", "productId", status, quantity, price, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair.orders (id, "productId", quantity, price, status, name, email, country, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair.products (id, name, type, language, region, date, description, imageurl, price, "subcategoryId", "createdAt", "updatedAt") FROM stdin;
4	product1	samisas	amharic	amharic	2024-04-18 03:00:00+03	description	1713768266955-802778726.jpg	2000	1	2024-04-22 09:44:26.969+03	2024-04-22 09:44:26.969+03
5	ortho	dsnf	amharic	addis	2024-04-18 03:00:00+03	samisams	1713775695774-562361315.png	4000	1	2024-04-22 11:48:15.798+03	2024-04-22 11:48:15.798+03
\.


--
-- Data for Name: screenshots; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair.screenshots (id, "productId", "imageUrl", status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: subcategories; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair.subcategories (id, name, "categoryId", "createdAt", "updatedAt") FROM stdin;
1	subcategory1	1	2024-04-22 09:34:37.604+03	2024-04-22 09:34:37.604+03
2	subCategory2	1	2024-04-22 11:23:43.742+03	2024-04-22 11:23:43.742+03
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: autoepcrepair; Owner: nilesoft
--

COPY autoepcrepair.users (id, "fullName", email, password, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: autoepcrepair; Owner: nilesoft
--

SELECT pg_catalog.setval('autoepcrepair.categories_id_seq', 2, true);


--
-- Name: orderDetails_id_seq; Type: SEQUENCE SET; Schema: autoepcrepair; Owner: nilesoft
--

SELECT pg_catalog.setval('autoepcrepair."orderDetails_id_seq"', 1, false);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: autoepcrepair; Owner: nilesoft
--

SELECT pg_catalog.setval('autoepcrepair.orders_id_seq', 10, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: autoepcrepair; Owner: nilesoft
--

SELECT pg_catalog.setval('autoepcrepair.products_id_seq', 5, true);


--
-- Name: screenshots_id_seq; Type: SEQUENCE SET; Schema: autoepcrepair; Owner: nilesoft
--

SELECT pg_catalog.setval('autoepcrepair.screenshots_id_seq', 1, false);


--
-- Name: subcategories_id_seq; Type: SEQUENCE SET; Schema: autoepcrepair; Owner: nilesoft
--

SELECT pg_catalog.setval('autoepcrepair.subcategories_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: autoepcrepair; Owner: nilesoft
--

SELECT pg_catalog.setval('autoepcrepair.users_id_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: orderDetails orderDetails_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair."orderDetails"
    ADD CONSTRAINT "orderDetails_pkey" PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: screenshots screenshots_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.screenshots
    ADD CONSTRAINT screenshots_pkey PRIMARY KEY (id);


--
-- Name: subcategories subcategories_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.subcategories
    ADD CONSTRAINT subcategories_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_password_key; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.users
    ADD CONSTRAINT users_password_key UNIQUE (password);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: orderDetails orderDetails_orderId_fkey; Type: FK CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair."orderDetails"
    ADD CONSTRAINT "orderDetails_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES autoepcrepair.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orderDetails orderDetails_productId_fkey; Type: FK CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair."orderDetails"
    ADD CONSTRAINT "orderDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES autoepcrepair.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products products_subcategoryId_fkey; Type: FK CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.products
    ADD CONSTRAINT "products_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES autoepcrepair.subcategories(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: screenshots screenshots_productId_fkey; Type: FK CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.screenshots
    ADD CONSTRAINT "screenshots_productId_fkey" FOREIGN KEY ("productId") REFERENCES autoepcrepair.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: subcategories subcategories_categoryId_fkey; Type: FK CONSTRAINT; Schema: autoepcrepair; Owner: nilesoft
--

ALTER TABLE ONLY autoepcrepair.subcategories
    ADD CONSTRAINT "subcategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES autoepcrepair.categories(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- nilesoftQL database dump complete
--

