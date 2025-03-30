import React from "react";
import './BentoGrid.css'

function BentoGrid(){

    return (
        <>
          <div class="gridContainer">
            <div class="item1">
                <div class="flexContainer">
                    <div class="text">Create and schedule content <span class="quicker">quicker</span></div>
                    <img class="createPost" src="/createPost.PNG" alt="Create Post"/>
                </div>
            </div>
            <div class="item2">
            <div class="flexContainer">
                    <div class="text">Social media 10x <span class="quicker">Faster</span> with AI.</div>
                    <img class="createPost" src="/illustration-five-stars.webp" alt="Create Post"/>
                </div>
            </div>
            <div class="item3">
            <div class="flexContainer">
                    <div class="text">Schedule to Social Media</div>
                    <img class="createPost" src="../public/illustration-schedule-posts.webp" alt="Create Post"/>
                    <p class="para">Optimize post timings to publish content at the perfect time for your audience.</p>
                </div>
            </div>
            <div class="item4">
            <div class="flexContainer">
                    <div class="text">Write your content using AI.</div>
                    <img class="createPost" src="/illustration-ai-content.webp" alt="Create Post"/>
                </div>
            </div>
            <div class="item5">
            <div class="flexContainer">
            <img class="createPost" src="/illustration-multiple-platforms.webp" alt="Create Post"/>
                    <div class="text">Manage multiple accounts and platforms.</div>
                </div>
            </div>
            <div class="item6">
            <div class="flexContainer">
                    <div class="text">Maintain a consistent posting schedule.</div>
            <img class="createPost" src="/illustration-consistent-schedule.webp" alt="Create Post"/>

                </div>

            </div>
            <div class="item7">
            <div class="flexContainer">
                    <div class="text"><span>56%</span> <p>faster audience growth.</p></div>
            <img class="createPost" src="/illustration-audience-growth.webp" alt="Create Post"/>

                </div>
            </div>
            <div class="item8">
            <div class="flexContainer2">
            <img class="createPost" src="/illustration-grow-followers.webp" alt="Create Post"/>

                    <div class="text">Growth followers with non stop content</div>

                </div>
            </div>
          </div>
        </>
    )
}

export default BentoGrid