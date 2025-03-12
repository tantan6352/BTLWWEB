class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: var(--header-height);
            z-index: 10;
            display: flex;
            align-items: center;
            background-color: var(--primary-header);
            height: 90px;
            padding: 0 50px;
        }
        .logo img {
            width: 150px;
            object-fit: contain;
            margin-top: 4px;
            transform-style: preserve-3d;
            transition: transform 3s ease-in-out;
        }
        
        .logo img:hover {
            transform: rotateY(3800deg);
        }
        
        .nav-menu {
            margin-right: auto;
            padding-left: 40px;
        }
        
        .menu {
            padding-left: 0;
            margin: 0;
            list-style: none;
            display: flex;
            justify-content: space-between;
        }
        
        .menu li a {
            text-decoration: none;
            font-family: titleFont;
            color: var(--yellow);
            font-size: 26px;
            padding: 0 20px;
            display: block;
        }
        
        .menu li a:hover {
            animation: animateColor ease-in-out 0.8s infinite;
        }
        
        .form-search {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: auto;
        }
        
        .form-search__input {
            padding: 8px 66px 8px 30px;
            border: none;
            outline: none;
            border-radius: 20px;
        }
        
        .form-search__btn {
            position: absolute;
            top: -25%;
            right: -20px;
            object-fit: contain;
            width: 50px;
            height: 50px;
            border: none;
            border: none;
            outline: none;
            border-radius: 50%;
            background-color:rgb(38, 115, 187);
            overflow: hidden;
        }
        
        .form-search__btn i {
            display: block;
            font-size: 28px;
            color: #fffaf3;
            transform: translateY(1px);
            transition: rotate ease-in-out 0.3s;
        }
        
        .form-search__btn:hover i {
            cursor: pointer;
            transform: scale(1.2);
            animation: animateColor ease-in-out 1s infinite;
        }
        
        
        /* =================user================ */
        
        .user {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin-right: 80px;
        }
        
        .user-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .user-top span {
            position: relative;
            display: block;
        }
        
        .user-top span:first-child::before {
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            height: 100%;
            background-color: #fffaf3;
        }
        
        .user-top span a {
            display: block;
            color: black;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: normal;
            text-decoration: none;
        }
        .user-top span:hover a{
            animation: animateColor ease-in-out 0.8s infinite;
        }


        .user-top span:first-child {
            padding-right: 10px;
        }
        
        .user-top span:last-child {
            padding-left: 10px;
        }
        
        .user-main {
            position: relative;
        }
        
        .user-main a img {
            width: 32px;
            transform: translate(-10px, -4px);
        }
        
        .user-main .quantity-cart {
            position: absolute;
            content: '';
            top: -8px;
            right: -2px;
            height: 20px;
            width: 20px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            color: #ff0000;
            background-color: blue;
            animation: animateBounce ease-in-out 2s infinite;
            font-weight: bold;
        }
    </style>

    <header>
        <div class="logo">
            <a href="home.html">
                <img src="https://www.coca-cola.com/content/dam/onexp/global/icons/Coke-company-logo-black.svg" alt="" class="img-fluid">
            </a>
        </div>
        <nav class="nav-menu">
            <ul class="menu">
                <li><a href="product.html">Sản phẩm</a></li>
                <li><a href="news.html">Tin tức</a></li>
                <li><a href="about.html">Giới thiệu</a></li>
                <li><a href="contact.html">Liên hệ với chúng tôi</a></li>
            </ul>
        </nav>
        <form action="" class="form-search">
            <input type="text" placeholder="Tìm Kiếm" class="form-search__input">
        </form>
        <section class="user">
            <div class="user-top">
            <span><a href="/html/auth.html">Đăng nhập</a></span>
            </div>
            <div class="user-main">
                <a href="cart.html">
                    <img src="/img/cart.png" alt="" class="img-fluid1">
                </a>
            </div>
        </section>
    </header>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <style>
        footer {
            height: 300px;
            width: 100%;
            background-color:var(--primary-header);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 50px;
        }

        .footer-logo {
            margin-right: 60px;
        }
        .footer-logo img {
            width: 250px;
            object-fit: contain;
            margin-top: 4px;
            transition: transform 3s ease-in-out;
            transform-style: preserve-3d;
        }

        .footer-logo img:hover {
            transform: rotateY(3440deg);
        }

        .footer-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 40px;
        }

        .footer-item a {
            display: block;
            font-size: 16px;
            text-transform: uppercase;
            color: var(--text-color);
            text-decoration: none;
            font-weight: bold;
            margin: 26px 0;
        }

        .footer-item a:hover {
            animation: animateColor ease-in-out 0.8s infinite;
        }

        .footer-follow {
            width: 25%;
            text-align: center;
        }

        .footer-follow button {
            padding: 10px 20px;
            border-radius: 20px;
            background-color: var(--yellow);
            border: 2px solid #fffaf3;
            text-transform: uppercase;
            color: #fffaf3;
            font-weight: bold;
            cursor: pointer;
            outline: none;
            margin-bottom: 20px;
        }

        .footer-follow button:hover {
            background-color: rgb(255, 250, 243);
            color: rgb(223, 209, 14);
        }

        .footer-social {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            padding: 0 50px;
            text-align: center;
        }

        .footer-social a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 30px;
            background-color:rgb(255, 255, 255);
            width: 44px;
            height: 44px;
            border-radius: 8px;
        }

        .footer-social a:hover {
            filter: brightness(1.5);
        }

        .footer-social a i {
            display: block;
            transform: translateY(8px);
        }
        .icon {
            fill: black;
            transition: fill 0.3s, transform 0.3s;
        }

        .icony:hover {
            fill:red;
        }
        .iconf:hover {
            fill:blue;
        }
        .iconi:hover {
            fill:#F56040;
        }
        .iconx:hover {
            fill:black;
        }
        .icon:hover {
            transform: scale(1.2);
        }
    </style>
    <footer>
        <div class="footer-logo">
            <a href="home.html">
                <img src="https://www.coca-cola.com/content/dam/onexp/global/icons/Coke-company-logo-black.svg" alt="" class="img-fluid">
            </a>
        </div>
        <div class="footer-list">
            <div class="footer-item">
                <a href="contact.html">liên hệ chúng tôi</a>
                <a href="">Điều khoản và điều kiện</a>
                <a href="">chính sách bảo mật</a>
            </div>
            <div class="footer-item">
                <a href="">Bản quyền</a>
                <a href="product.html">Sự thật sản phẩm</a>
                <a href="contact.html">Định vị ccửa hàng</a>
            </div>
            <div class="footer-item">
                <a href="">phục vụ coca cola</a>
                <a href="https://x.com/CocaCola?t=7fTyH8XLPuu9ARpPERjr6Q&s=09">về quảng cáo</a>
                <a href="team.html">nhóm của chúng tôi</a>
            </div>
        </div>
        <div class="footer-follow">
            <button>Theo dõi chúng tôi</button>
            <div class="footer-social">
                <a href="https://x.com/CocaCola?t=7fTyH8XLPuu9ARpPERjr6Q&s=09">
                <svg class="icon iconx" xmlns="http://www.w3.org/2000/svg" x="0px" height="1em" viewBox="0 0 24 24"><path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path></svg>
                </a>
                <a href="https://www.facebook.com/TCCCVN/?brand_redir=262355423960836">
                <svg class="icon iconf" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </a>
                <a href="https://www.instagram.com/cocacola/">
                <svg class="icon iconi" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="https://www.youtube.com/@Coca-Cola">
                <svg class="icon icony" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                </a>
            </div>
        </div>
    </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)