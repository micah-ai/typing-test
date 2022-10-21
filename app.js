const data = 
    ["123Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, aut ducimus hic cum nemo soluta omnis numquam adipisci quia, recusandae tempore nobis autem libero saepe quod ex at. Eligendi vero harum illum quos optio dolores doloremque minima! Autem ipsa quod quidem dolorum quo inventore asperiores! Recusandae voluptatem repellat dolor dolores commodi quibusdam vitae? Sapiente ipsam animi eveniet quae? Quae deserunt, suscipit tenetur ullam obcaecati excepturi molestias, pariatur, provident voluptas culpa perspiciatis dolore ducimus asperiores consectetur voluptatum optio. Soluta dolorum consequatur laboriosam tempore maiores? Consectetur ipsum, beatae, quae atque temporibus minima assumenda, rerum eius fugit sint recusandae obcaecati animi quia quo accusantium consequuntur vel? Cumque recusandae, in maxime atque tempore esse corporis sunt nulla sapiente. Accusantium laborum est doloribus cum quibusdam, odio, explicabo voluptates iste modi expedita consequatur fugiat possimus nobis deleniti corporis dolores a esse. Fugit hic molestiae quod omnis quisquam voluptate, nemo, consequatur quae error expedita quia eius labore debitis possimus! Facere illum, dolores molestiae voluptates ut expedita recusandae beatae cumque, facilis voluptatum tempora veniam ipsam, reprehenderit repellat cum! Dolorem commodi eius iusto architecto, corrupti possimus explicabo atque totam repellendus nulla dolorum, natus molestiae? Temporibus similique ipsa iure, quasi quae, molestias aspernatur repellendus natus quibusdam maiores nesciunt quia!","185Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, aut ducimus hic cum nemo soluta omnis numquam adipisci quia, recusandae tempore nobis autem libero saepe quod ex at. Eligendi vero harum illum quos optio dolores doloremque minima! Autem ipsa quod quidem dolorum quo inventore asperiores! Recusandae voluptatem repellat dolor dolores commodi quibusdam vitae? Sapiente ipsam animi eveniet quae? Quae deserunt, suscipit tenetur ullam obcaecati excepturi molestias, pariatur, provident voluptas culpa perspiciatis dolore ducimus asperiores consectetur voluptatum optio. Soluta dolorum consequatur laboriosam tempore maiores? Consectetur ipsum, beatae, quae atque temporibus minima assumenda, rerum eius fugit sint recusandae obcaecati animi quia quo accusantium consequuntur vel? Cumque recusandae, in maxime atque tempore esse corporis sunt nulla sapiente. Accusantium laborum est doloribus cum quibusdam, odio, explicabo voluptates iste modi expedita consequatur fugiat possimus nobis deleniti corporis dolores a esse. Fugit hic molestiae quod omnis quisquam voluptate, nemo, consequatur quae error expedita quia eius labore debitis possimus! Facere illum, dolores molestiae voluptates ut expedita recusandae beatae cumque, facilis voluptatum tempora veniam ipsam, reprehenderit repellat cum! Dolorem commodi eius iusto architecto, corrupti possimus explicabo atque totam repellendus nulla dolorum, natus molestiae? Temporibus similique ipsa iure, quasi quae, molestias aspernatur repellendus natus quibusdam maiores nesciunt quia!","135Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, aut ducimus hic cum nemo soluta omnis numquam adipisci quia, recusandae tempore nobis autem libero saepe quod ex at. Eligendi vero harum illum quos optio dolores doloremque minima! Autem ipsa quod quidem dolorum quo inventore asperiores! Recusandae voluptatem repellat dolor dolores commodi quibusdam vitae? Sapiente ipsam animi eveniet quae? Quae deserunt, suscipit tenetur ullam obcaecati excepturi molestias, pariatur, provident voluptas culpa perspiciatis dolore ducimus asperiores consectetur voluptatum optio. Soluta dolorum consequatur laboriosam tempore maiores? Consectetur ipsum, beatae, quae atque temporibus minima assumenda, rerum eius fugit sint recusandae obcaecati animi quia quo accusantium consequuntur vel? Cumque recusandae, in maxime atque tempore esse corporis sunt nulla sapiente. Accusantium laborum est doloribus cum quibusdam, odio, explicabo voluptates iste modi expedita consequatur fugiat possimus nobis deleniti corporis dolores a esse. Fugit hic molestiae quod omnis quisquam voluptate, nemo, consequatur quae error expedita quia eius labore debitis possimus! Facere illum, dolores molestiae voluptates ut expedita recusandae beatae cumque, facilis voluptatum tempora veniam ipsam, reprehenderit repellat cum! Dolorem commodi eius iusto architecto, corrupti possimus explicabo atque totam repellendus nulla dolorum, natus molestiae? Temporibus similique ipsa iure, quasi quae, molestias aspernatur repellendus natus quibusdam maiores nesciunt quia!","145Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, aut ducimus hic cum nemo soluta omnis numquam adipisci quia, recusandae tempore nobis autem libero saepe quod ex at. Eligendi vero harum illum quos optio dolores doloremque minima! Autem ipsa quod quidem dolorum quo inventore asperiores! Recusandae voluptatem repellat dolor dolores commodi quibusdam vitae? Sapiente ipsam animi eveniet quae? Quae deserunt, suscipit tenetur ullam obcaecati excepturi molestias, pariatur, provident voluptas culpa perspiciatis dolore ducimus asperiores consectetur voluptatum optio. Soluta dolorum consequatur laboriosam tempore maiores? Consectetur ipsum, beatae, quae atque temporibus minima assumenda, rerum eius fugit sint recusandae obcaecati animi quia quo accusantium consequuntur vel? Cumque recusandae, in maxime atque tempore esse corporis sunt nulla sapiente. Accusantium laborum est doloribus cum quibusdam, odio, explicabo voluptates iste modi expedita consequatur fugiat possimus nobis deleniti corporis dolores a esse. Fugit hic molestiae quod omnis quisquam voluptate, nemo, consequatur quae error expedita quia eius labore debitis possimus! Facere illum, dolores molestiae voluptates ut expedita recusandae beatae cumque, facilis voluptatum tempora veniam ipsam, reprehenderit repellat cum! Dolorem commodi eius iusto architecto, corrupti possimus explicabo atque totam repellendus nulla dolorum, natus molestiae? Temporibus similique ipsa iure, quasi quae, molestias aspernatur repellendus natus quibusdam maiores nesciunt quia!"
    ],
    typingText = document.querySelector(".typingScreen"),
    inputBar = document.querySelector("input.input"),
    mistakeTag = document.querySelector(".Mistake span"),
    timeTag = document.querySelector(".timer span"),
    cpmTag = document.querySelector(".cpm span"),
    wpmTag = document.querySelector(".wpm span"),
    restartbtn = document.querySelector(".tryAgain");

    
    let timer,
    maxTime = 60,
    timeLeft = maxTime,
    characterindex = mistakes = isTyping = 0;

    //picking random paragraphs
    const randomPrg = () => {
        let randindex = Math.floor(Math.random() * data.length);
        typingText.innerHTML = "";
        data[randindex].split("").forEach(dat => {
            let spanTag = document.createElement("span");
            spanTag.innerText = dat;
            typingText.appendChild(spanTag);
        });
        typingText.querySelectorAll("span")[0].classList.add("active");
        document.addEventListener("keydown", () => inputBar.focus());
        typingText.addEventListener("click", () => inputBar.focus());
    }
    //executing the paragraphs that is up
    const whenTyping = () => {
        const characters = typingText.querySelectorAll("span");
        let typedCharacter = inputBar.value.split("")[characterindex];

        if (characterindex < characters.length - 1 && timeLeft > 0) {
            if(!isTyping){
                timer = setInterval(whenTimer,1000);
                isTyping = true;
            }
            //if a backspace is pressed or user hasnt enter any character
            if (typedCharacter == null) {
                //modifying the charcter index
                characterindex--;
                //if the letter cleared contains incorrect as a class
                if (characters[characterindex].classList.contains("incorrect")) {
                    //clearing the mistakes in for when backspace is pressed
                    mistakes--;
                }
    
                //removing the correct and incorrect class when the user type backspace
                characters[characterindex].classList.remove("correct","incorrect")
            } else {
                if (characters[characterindex].innerText === typedCharacter) {
                    //if the letter typed in is correct, correct class should be added;
                    //else, incorrect class should be added and the mistakes should increase by 1
                    characters[characterindex].classList.add("correct");
                } else {
                    mistakes++;
                    characters[characterindex].classList.add("incorrect");
                }
                characterindex++;
            }
            characters.forEach(dat => dat.classList.remove("active"));
            characters[characterindex].classList.add("active");
    
            let wpm = Math.round((((characterindex - mistakes) / 5) /( maxTime - timeLeft)) * 60);
            //if wpm value is 0, infinity or empty. the value should be set to 0
            wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
            mistakeTag.innerText = mistakes;
            wpmTag.innerText = wpm;
            cpmTag.innerText = characterindex - mistakes;
        } else {
            inputBar.value = "";
            clearInterval(timer);
        }
    }

    const whenTimer = () => {
        //if there is still seconds remaining to complete typing
        if(timeLeft > 0){
            timeLeft--;
            timeTag.innerText = timeLeft;
        }
        else{
            clearInterval(timer);
        }
    }
    randomPrg();
    inputBar.addEventListener("input", whenTyping);
    restartbtn.addEventListener("click", () => {
        randomPrg();
        inputBar.value = "";
        clearInterval(timer);
        timeLeft = maxTime,
        characterindex = mistakes = isTyping = 0;
        timeTag.innerText = timeLeft;
        mistakeTag.innerText = mistakes;
        wpmTag.innerText = 0;
        cpmTag.innerText = 0; 
    });