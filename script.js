body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: white;
    background: linear-gradient(135deg, #0f172a, #020617);
}

/* PARTICLE BG */
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* SMOOTH SCROLL */
html {
    scroll-behavior: smooth;
}

/* NAVBAR */
header {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 10;
}

header h1 {
    letter-spacing: 2px;
}

header nav a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    transition: 0.3s;
}

header nav a:hover {
    color: #38bdf8;
}

/* HERO */
.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 60px;
}

.hero h2 {
    font-size: 40px;
    text-shadow: 0 0 15px rgba(56,189,248,0.7);
}

.hero p {
    color: #94a3b8;
}

.hero img {
    width: 220px;
    border-radius: 20px;
    transition: 0.4s;
}

.hero img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(56,189,248,0.8);
}

/* BUTTON */
.btn {
    background: #38bdf8;
    padding: 10px 20px;
    border-radius: 8px;
    color: black;
    text-decoration: none;
    transition: 0.3s;
}

.btn:hover {
    box-shadow: 0 0 15px #38bdf8;
}

/* SECTION */
.about, .skills, .project, .contact {
    padding: 70px 40px;
    text-align: center;
}

/* SKILLS */
.skill {
    margin: 20px 0;
}

.bar {
    background: #334155;
    height: 8px;
    border-radius: 10px;
    overflow: hidden;
}

.bar div {
    height: 8px;
    background: #38bdf8;
    border-radius: 10px;
}

/* CARD (GLASS EFFECT) */
.card {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(56,189,248,0.5);
}

/* SWIPER */
.swiper {
    width: 100%;
    padding: 20px;
}

/* SOCIAL */
.social a {
    font-size: 25px;
    margin: 10px;
    color: white;
    transition: 0.3s;
}

.social a:hover {
    color: #38bdf8;
    transform: scale(1.2);
}

/* FOOTER */
footer {
    text-align: center;
    padding: 20px;
    background: #020617;
    color: #94a3b8;
}

/* RESPONSIVE HP */
@media (max-width: 768px) {

    header {
        flex-direction: column;
        text-align: center;
    }

    header nav {
        margin-top: 10px;
    }

    .hero {
        flex-direction: column;
        text-align: center;
        padding: 50px 20px;
    }

    .hero img {
        margin-top: 20px;
        width: 150px;
    }

}
