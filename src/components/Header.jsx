export default function Header({ children }){

    return (
        <div id="main-header">
            <h1 id="title">
                <img src='logo.jpg' alt="fine dining in the city" />
                ReactFood
            </h1>
            { children }
        </div>
    );
}