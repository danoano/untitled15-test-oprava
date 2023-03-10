

interface Props{
    name: string

}



function ProfileCard(props : Props) {
    return(
        <div>
            {props.name}

        </div>
    );
}