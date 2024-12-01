import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="footer ">
            <div className="container">
                <div className="text text_font-40 text_family-neural text_w-700">
                    w
                    <span className="footer__subtitle text text_s text_upp text_cr text_w-400">
                        goods
                    </span>
                </div>
                <div className="footer__content">
                    <Link className="link" href="">
                        <p className="text text_w-300">Адреса магазинов</p>
                    </Link>
                    <Link className="link" href="">
                        <p className="text text_w-300">Помощь и поддержка</p>
                    </Link>
                    <Link className="link" href="">
                        <p className="text text_w-300">
                            Пользовательское соглашение
                        </p>
                    </Link>
                    <Link className="link" href="">
                        <p className="text text_w-300">
                            Согласие на обработку персональных данных
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
