import React, {useState, useEffect } from "react";

const Myapi = () => {
    const [recipe, setRecipe] = useState([]);
    const getData = async () => {
    // let data = await fetch(`https://api.github.com/users`);
    let response = await data.json();
    setRecipe(response);
    console.log(response);}

    useEffect(() => {
    getData();  
    }, []);

    return(
        <>
        <h2>List of GitHub Users</h2>
            <div className="container-fluid mt-5">
            <div className="row text-center">{
                recipe.map((items)=>{
                    return(
                        <div className="col-10 col-md-4 mt-5">
                            <div class="card p-2">
                            <div class="d-flex align-items-center">
                                <div class="image"><img src={items.avatar_url} class="rounded" width="155" /></div>
                                <div class="ml-3 w-100">
                                    <h4 class="mb-0 mt-0 textLeft">{items.login}</h4><span className="textLeft">{items.node_id}</span>
                                    <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div class="d-flex flex-column"><span class="articles">Article</span><span class="number1">14</span></div>
                                        <div class="d-flex flex-column"><span class="followers">Followers</span><span class="number2">980</span></div>
                                        <div class="d-flex flex-column"><span class="rating">Rating</span><span class="number3">8.9</span> </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }</div>
            </div>
        </>         
    )
}

export default Myapi;