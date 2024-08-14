const Feed = ({title,link,date}) => {
    const options = {
        day: 'numeric',     // Gün (22)
        month: 'long',      // Ay (Kasım)
        year: 'numeric'     // Yıl (2024)
    };

    const articleDate = new Date(date).toLocaleDateString('tr-TR', options);

    return(
        <>
        <a href={link} target="_blank" rel="nooper noreferrer"
        className="hover:text-orange-500">
        <h3 className="text-xl mb-1 underline decoration-blue-400">{title}</h3>
        <p>{articleDate}</p></a>
        </>
    )
}

export default Feed;