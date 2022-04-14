CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    email VARCHAR(40) UNIQUE NOT NULL,
    hashed_password CHAR(60) NOT NULL,
    first_name CHAR(20) NOT NULL,
    last_name CHAR(20) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES accounts (id),
    title VARCHAR(20) NOT NULL,
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