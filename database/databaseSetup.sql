CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    account_id integer REFERENCES accounts (id),
    title TEXT NOT NULL,
    text_body VARCHAR(1024) NOT NULL
    --image_id TEXT
);

CREATE TABLE account_feed_posts (
    account_id INT,
    post_id INT,
    PRIMARY KEY (account_id, post_id),
    CONSTRAINT fk_account FOREIGN KEY (account_id) REFERENCES accounts (id),
    CONSTRAINT fk_post FOREIGN KEY(post_id) REFERENCES posts (id),
    viewed_date TIMESTAMP DEFAULT null
);