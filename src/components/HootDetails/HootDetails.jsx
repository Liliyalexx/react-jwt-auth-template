import {useState, useEffect} from "react";
import * as hootService from '../../services/hootService';
import { useParams } from "react-router";
const HootDetails = (props)=>{

const [hoot, setHoot] = useState(null);
const {hootId} = useParams();

useEffect(() => {
    const fetchHoot = async () =>{
        const hootData = await hootService.show(hootId);
        setHoot(hootData);
    }
    fetchHoot();//will run when th effect function runs
}, [hootId]);
if(!hoot) return 
<main>
    Loading ...
</main>
console.log('hoot state: ', hoot);

    return (
    <main>
<section>
    <header>
        <p>
            {hoot.category.toUpperCase()}
        </p>
        <h1>
            {hoot.title}
        </h1>
        <p>{`${hoot.author.username} post on 
             ${new Date(hoot.createdAt).toLocaleDateString()}`}
             </p>
    </header>
    <p>{hoot.text}</p>
</section>
<section>
    <h2>
        Comments
    </h2>
    {!hoot.comments.length && <p>There are no comments</p>}
    {hoot.comments.map((comment) =>(
        <article key={cpmment._id}>
            <header>
                <p>
                    {`${comment.author.username} posted on
                        ${new Date(comment.createdAt).toLocaleDateString()}
                    `}
                </p>
            </header>
        </article>
    ))}
</section>
    </main>
    )
}

export default HootDetails