import Categories from "../components/Categories";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CardList from "../components/CardList";

export default function Home() {
    return (
        <>
            <Nav/>
            <Search/>
            <Categories/>
            <CardList/>
        </>
    )
}