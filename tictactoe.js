
var flag = [0,0,0,0,0,0,0,0,0]; //history of player 1&2 clicks
var bool = 0; //for checking player 1 & 2 sequence
var won = false;

var p1_w=0, p1_l=0, p2_w=0, p2_l=0;

function cellClicked(event){
	if((flag[event.target.id] == 0) &&  (won == false))
	{

		if(bool==0)
			{
				event.target.innerHTML="O";
				bool = 1;
				flag[event.target.id] = 1;
				tic_tack();
			}
		else{
				event.target.innerHTML="X";
				bool = 0;
				flag[event.target.id] = 2;
				tic_tack();
			}
	}
	 
}

function reset()
{
	flag = [0,0,0,0,0,0,0,0,0]; //history of player 1&2 clicks
	bool = 0; //for checking player 1 & 2 sequence
	won = false;
	{document.getElementById("P1").innerHTML = "Let's Play Again";}

	for(var i=0; i<9;i++)
	document.getElementById(i).innerHTML = "";
}

function tic_tack()
{

if(((flag[0] == flag[4]) && (flag[4] == flag[8])) || ((flag[2] == flag[4]) && (flag[4] == flag[6])))
{
	if(flag[4] == 1)
				{
					document.getElementById("P1").innerHTML = "PLAYER O WON";
					won =true;
					
				}
	if(flag[4] == 2)
				{document.getElementById("P1").innerHTML = "PLAYER X WON"; won =true;}
}

else{

	for(var i=0; i<9; i=i+3)
	{
		if((flag[i] == flag[i+1]) && (flag[i+1] == flag[i+2]))
		{
			if(flag[i] == 1)
				{
					document.getElementById("P1").innerHTML = "PLAYER O WON";
					won =true;
					p1_w++;
					document.getElementById("w").innerHTML = p1_w;
					p1_l++;
					document.getElementById("l").innerHTML = p1_l;
		}
			if(flag[i] == 2)
				{document.getElementById("P1").innerHTML = "PLAYER X WON"; won =true;}
		}

	}

	for(var i=0; i<3; i++)
	{
		if((flag[i] == flag[i+3]) && (flag[i+3] == flag[i+6]))

		{
			if(flag[i] == 1)
				{document.getElementById("P1").innerHTML = "PLAYER O WON"; won =true;}
			if(flag[i] == 2)
				{document.getElementById("P1").innerHTML = "PLAYER X WON"; won =true;}
		}
	}
}

}

//cell1.addEventListener('click',cellClicked);//JS code goes here
