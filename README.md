🌍 Travel Explorer API
======================

### Node.js - Express - JSON Data / DB - Country & Continent Filters

A simple and powerful REST API built with **Node.js + Express** that provides **tourist attractions**, filtered by **country** or **continent**.\
Perfect for travel apps, educational tools, dashboards, or recommendation engines.

* * * * *

🚀 Features
-----------

-   Get attractions by **country**

-   Get attractions by **continent**

-   Lightweight and fast Node.js API

-   Supports static JSON data or database-backed data

-   Clean REST endpoints

-   Easy to integrate with any frontend (React, Next.js, Vue, mobile apps, etc.)

-   Expandable data structure

* * * * *

🧱 Tech Stack
-------------

-   **Node.js**

-   **dotenv** for configuration

* * * * *

🔧 Installation
---------------

```
git clone https://github.com/your-username/travel-explorer-api.git

cd travel-explorer-api

npm install
```

* * * * *

▶️ Run the API
--------------

```
npm start
```

Default:\
```
http://localhost:8000/api
```

* * * * *

🧩 Endpoints
------------

### 🌐 Get attractions by country

`GET /api/country/:name`

Example:

`GET /api/country/USA`

Response:

```
{
    "name": "Fly Geyser",
    "location": "Nevada",
    "country": "USA",
    "continent": "North America",
    "is_open_to_public": false,
    "uuid": "550e8400-e29b-41d4-a716-446655440005",
    "details": [
      {
        "fun_fact": "The geyser was accidentally created by well drilling in 1964."
      },
      {
        "description": "A colorful, continuously spouting geothermal formation with vibrant mineral deposits on a private Nevada ranch."
      }
    ]
  }
```

* * * * *

### 🌍 Get attractions by continent

`GET /api/continent/:region`

Example:

`GET /api/continent/oceania`

Response:

```
{
    "name": "Waitomo Glowworm Caves",
    "location": "Waitomo",
    "country": "New Zealand",
    "continent": "Oceania",
    "is_open_to_public": true,
    "uuid": "550e8400-e29b-41d4-a716-446655440001",
    "details": [
      {
        "fun_fact": "The glowworms create a star-like effect on the cave ceiling using bioluminescence."
      },
      {
        "description": "A subterranean network of limestone caverns famous for its magical boat rides under twinkling glowworm-lit ceilings."
      }
  }
  ```

* * * * *

⭐ Support
---------

If this project is useful, consider giving the repo a **star ⭐**!
