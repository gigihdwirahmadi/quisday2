
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './homepages.css'
const array=[ 
    {
        postId: 1,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate officia, perspiciatis repudiandae dolore, vitae reiciendis molestiae reprehenderit, quo labore dolorem velit error exercitationem. Aspernatur veritatis, quia at est et corrupti distinctio, nemo labore praesentium ut velit aliquid explicabo! Iusto fugiat incidunt illo sunt, id hic quaerat eos porro repellendus doloremque obcaecati itaque nihil maiores! Ipsam provident quaerat accusamus aperiam esse asperiores adipisci repudiandae atque alias! Illum debitis exercitationem incidunt adipisci excepturi asperiores, optio ipsum autem deleniti quod consequatur non id molestias nesciunt iure est obcaecati quisquam illo quam alias ullam et doloremque voluptatum repellat? Molestias sed architecto ut voluptates!"
    },
    {
        postId: 2,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate officia, perspiciatis repudiandae dolore, vitae reiciendis molestiae reprehenderit, quo labore dolorem velit error exercitationem. Aspernatur veritatis, quia at est et corrupti distinctio, nemo labore praesentium ut velit aliquid explicabo! Iusto fugiat incidunt illo sunt, id hic quaerat eos porro repellendus doloremque obcaecati itaque nihil maiores! Ipsam provident quaerat accusamus aperiam esse asperiores adipisci repudiandae atque alias! Illum debitis exercitationem incidunt adipisci excepturi asperiores, optio ipsum autem deleniti quod consequatur non id molestias nesciunt iure est obcaecati quisquam illo quam alias ullam et doloremque voluptatum repellat? Molestias sed architecto ut voluptates!"
    },
    {
        postId: 3,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate officia, perspiciatis repudiandae dolore, vitae reiciendis molestiae reprehenderit, quo labore dolorem velit error exercitationem. Aspernatur veritatis, quia at est et corrupti distinctio, nemo labore praesentium ut velit aliquid explicabo! Iusto fugiat incidunt illo sunt, id hic quaerat eos porro repellendus doloremque obcaecati itaque nihil maiores! Ipsam provident quaerat accusamus aperiam esse asperiores adipisci repudiandae atque alias! Illum debitis exercitationem incidunt adipisci excepturi asperiores, optio ipsum autem deleniti quod consequatur non id molestias nesciunt iure est obcaecati quisquam illo quam alias ullam et doloremque voluptatum repellat? Molestias sed architecto ut voluptates!"
    }
]
const HomePages = () => {
    const navigate = useNavigate();

    const NavigateProfileAddres = (idarr,contentarr) => {
        navigate(`/post/${idarr}`, {
            state:{content:contentarr},
        });
    }
    return (
        <div class="c">
            <div>
            <h1>Home Pages</h1>
            </div>
            {array.map((value, index) => {
                console.log(value.postId);
            return(<div onClick={() => {
                NavigateProfileAddres(value.postId, value.content)
            }} 
             key={index.postId} class="item">Post {value.postId}</div>)
        })}
        </div>
    )
}
export default HomePages;