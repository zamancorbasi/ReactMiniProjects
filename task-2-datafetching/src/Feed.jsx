const Feed = ({title,img}) => {
    

    
    return(
        <>

        <div className="max-w-md rounded-xl flex flex-col 
        items-center justify-center border
        text-center text-lg pt-3 pb-4 px-2 md:px-6">
           
        <img src={img} 
        className="w-[200px]"/>
        <p>{title}</p>
            
        </div>
        
        </>
    )
}

export default Feed;