import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo";
import Cookies from "js-cookie";
import { PUBLIC_URL } from "@/config/url.config";
import { EnumTokens, getUser } from "@/services/auth/auth-token.service";
import { authService } from "@/services/auth/auth.service";

export default function Navbar() {
    const isCookieAccess = Cookies.get(EnumTokens.ACCESS_TOKEN);

    return (
        <header className="header container">
            <nav className="header__nav ">
                <Logo />
                <div className="header__links">
                    <Link href={PUBLIC_URL.main()} className="link">
                        <p className="text text_w-300">Главная</p>
                    </Link>
                    <Link href={""} className="link">
                        <p className="text text_w-300">Поддержка</p>
                    </Link>
                    <Link href={""} className="link">
                        <p className="text text_w-300">О нас</p>
                    </Link>
                </div>
                <div className="header__links header__links-auth">
                    <Link
                        href={
                            isCookieAccess
                                ? PUBLIC_URL.cart()
                                : PUBLIC_URL.auth("signIn")
                        }
                        className="link header__link"
                    >
                        <Image
                            src={"/cart.svg"}
                            alt="cart"
                            width={17}
                            height={17}
                        />
                        <p className="text text_w-300">Корзина</p>
                    </Link>
                    <Link
                        href={PUBLIC_URL.auth("signIn")}
                        className="link header__link"
                        onClick={() => {
                            authService.logout();
                        }}
                    >
                        <Image
                            src={"/person.svg"}
                            alt="person"
                            width={14}
                            height={14}
                        />
                        <p className="text text_w-300">
                            {isCookieAccess ? `${getUser()}` : "Войти"}
                        </p>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
