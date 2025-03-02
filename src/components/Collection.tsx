interface  CollectionProps{
    imgCollection: string;
    tittle: string;
    text: string;
}

export default function Collection({imgCollection,tittle,text}: CollectionProps){
    return(
        <div className="collectionContainer">
            <div className="imgContainer">
                <img src={imgCollection} alt=""/>
            </div>
            <div className="infoContainer">
                <h1>{tittle}</h1>
                <p>{text}</p>
                <button>LOAD MORE</button>
            </div>
        </div>
    );
}