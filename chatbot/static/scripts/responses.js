function getBotResponse(input) {
    //rock paper scissors
    if (input == "hi") {
        return "Hello there!";
    } else if (input == "who is your friend") {
        return "my developer xavier is my friend!";
    }
  

    // Simple responses and what to watch
    if (input == "hello") {
        return "Hello there!";
    }   if(input == "what should i watch"){
        return "whould you like to watch chinese drama?";
    }if(input == "yes"){
        return "which genres you wanna watch? LIKE romance,action,adventure,romcom,thriller,comedy,dark";
    }if (input == "romance"){                           //from here if you choose chinese drama
        return "love020,Brightest start in the sky,skate in love,Mr.gu,girlfriend,my girlgriend is an alien,you are my destiny";
    }
    else if (input == "action"){
        return "legend of awakening,The untammed,the wolf,";
    }
    else if(input == "adventure"){
        return "Tribes and Empires: Storm of Prophecy,candle in the tomb,crazy queen,the legend of zu,legend of nine tail fox";
    }
    else if(input == "romcom"){
        return "my amazing boyfriend,a love so beautiful,intense love,mr.Honesty,parallel love";
    } else if(input == "thriller"){
        return "evil minds,head above water,love me if you dare";
    } else if(input == "comedy"){
        return "le coup de foudre,put your head on my shoulder,you are my hero,the eternal love,fake princess and if you ask me my all time go is skate into love ";
    } else if(input == "dark"){
        return "love me if you dare,nirvana in fire,guardian";
    }else if(input == "whats your favorite"){
        return " if you  cant decide then you should watch untammed"
    }   


    if (input == "no") {
        return "which genre do you like?k(LIKE kromance,kaction,kadventure,kromcom,kthriller,kcomedy,kdark) ";
    }       if (input == "kromance"){                    //from here if you choose korean drama
            return "nevertheless,True beauty,love alarm , hometown cha cha";
        }
        else if (input == "kaction"){
            return "moon lover,extraordinary you,the descendant of the sun";
        }
        else if(input == "kadventure"){
            return "kingdom,black,holy land";
        }
        else if(input == "kromcom"){
            return "hotel del luna,";
        }else if(input == "kthriller"){
            return "mouse, penthouse,sky castle and if you ask me my all time go is penthouse  ";
        }else if(input == "kcomedy"){
            return "Strong Woman Do Bong Soon ,Welcome to Waikiki,She Was Pretty,What's Wrong with Secretary Kim ";
        }else if(input == "kdark"){
            return "Signal,Bad Guys ,I Remember You ,The Girl Who Sees Scents ,When a Snail Falls in Love ,You're All Surrounded ,Mrs. Cop ,Healer ,The Master's Sun ,Pinocchio ";
        }
    else if (input == "which drama is ongoing"){

        return "hometown cha cha ,squid game ,dali and the cocky prince";
    }
 else if (input == "goodbye") {
        return "Talk to you later!";
    } else{
        return "i think you should get some snacks and watch some dramas";

    }
    if (input == "hi") {
        return "Hello there!";
    } 
}


