import Link from "next/link";

export default function ConsentBlock() {
    return (
        <div>
            <p className="form__info text text_w-300 text_font-14 ">
                <span>
                    Нажимая &quot;Войти&quot; или
                    &quot;Зарегистрироваться&quot; вы подтверждаете свое
                    согласие c
                </span>
                <Link className="link text_und-line" href={""}>
                    Пользовательским соглашением
                </Link>
                , 
                <Link className="link text_und-line" href={""}>
                    Политикой конфиденциальности
                </Link>
                , и 
                <Link className="link text_und-line" href={""}>
                    Правилами программы лояльности
                </Link>
                .
            </p>
        </div>
    );
}
