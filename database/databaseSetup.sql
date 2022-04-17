CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES accounts (id),
    title TEXT NOT NULL,
    text_body VARCHAR(1024) NOT NULL
);

CREATE TABLE account_feed_posts (
    PRIMARY KEY (account_id, post_id),
    FOREIGN KEY (account_id) REFERENCES accounts (id),
    FOREIGN KEY (post_id) REFERENCES posts (id),
    account_id INT NOT NULL,
    post_id INT NOT NULL,
    viewed_date TIMESTAMP
);