class User {
    constructor(id, posts, followers) {
        this.id = id,
            this.posts = posts,
            this.followers = followers;
    }
    createPost(content) {
        return this.posts.push(content);
    }
}
class Post {
    constructor(id, likes, comments, userId, content) {
        this.id = id,
            this.likes = likes,
            this.comments = comments,
            this.userId = userId,
            this.content = content;
    }
    addLike(user) {
        return this.likes.push(user);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class _Comment {
    constructor(id, userId, content, replies) {
        this.id = id,
            this.userId = userId,
            this.content = content,
            this.replies = replies;
    }
    addRely(rely) {
        this.replies.push(rely);
    }
}
