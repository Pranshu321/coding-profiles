import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Content from "../../components/Content";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

// const inter = Inter({ subsets: ['latin'] })

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#9763f6",
    },
    secondary: {
      main: "#f73378",
    },
    // Background colors
    info: {
      main: "#121212",
      light: "#191b21",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "160px",
    paddingBottom: "160px",
    backgroundColor: "black",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Leetcode Github Card</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://assets.leetcode.com/static_assets/public/icons/favicon.ico"
        />
      </Head>
      <ThemeProvider theme={mainTheme}>
        <div className={classes.root}>
          <Content />
        </div>
      </ThemeProvider>
    </>
  );
}
