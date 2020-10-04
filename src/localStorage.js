export default class Storage {
  static getLikes() {
    let likes;
    if (localStorage.getItem("likes") === null) {
      likes = [];
    } else {
      likes = JSON.parse(localStorage.getItem("likes"));
    }
    return likes;
  }

  static addLike(like) {
    const likes = Storage.getLikes();
    likes.push(like);
    localStorage.setItem("likes", JSON.stringify(likes));
  }
}
