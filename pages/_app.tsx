import type { AppProps } from "next/app";
import {PokedexProvider} from "../context/pokedex/PokedexContext";
import '../styles/global.css';

function MyApp({ Component, pageProps}: AppProps) {
    return (
        <PokedexProvider>
            <Component {...pageProps} />
        </PokedexProvider>
    );

}

export default MyApp;