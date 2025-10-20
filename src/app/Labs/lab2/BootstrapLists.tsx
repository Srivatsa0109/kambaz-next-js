"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function BootstrapLists () {
    return (
        <div id="wd-css-list">
            <div id="wd-css-styling-list">
                <h2>Favorite Movies</h2>
                <ListGroup>
                    <ListGroupItem active>Aliens</ListGroupItem>
                    <ListGroupItem>Terminator</ListGroupItem>
                    <ListGroupItem>Blade Runner</ListGroupItem>
                    <ListGroupItem>Lord of the Rings</ListGroupItem>
                    <ListGroupItem disabled>Star Wars</ListGroupItem>
                </ListGroup>
            </div>
            <div id="wd-css-hyperlink-list">
                <h2>Favorite Books</h2>
                <ListGroup>
                    <ListGroupItem action active href="https://en.wikipedia.org/wiki/Dune_(novel)">Dune</ListGroupItem>
                    <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">The Lord of the Rings</ListGroupItem>
                    <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Forever_War">The Forever War</ListGroupItem>
                    <ListGroupItem action href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)">2001: A Space Odyssey</ListGroupItem>
                    <ListGroupItem action disabled href="https://en.wikipedia.org/wiki/Ender%27s_Game">Enders Game</ListGroupItem>
                    <ListGroupItem action onClick={()=> alert("New Book Added")}>Add another book</ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
}