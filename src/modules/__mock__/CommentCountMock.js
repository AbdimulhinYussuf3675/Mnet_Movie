const addCommentCounter = () => {
    const commentItems = document.querySelectorAll('.head');
    const numOfComment = commentItems.length;
    return numOfComment;
};

export default addCommentCounter;