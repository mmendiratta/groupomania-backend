CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    account_id integer REFERENCES accounts (id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    text_body VARCHAR(1024) NOT NULL,
    image_id TEXT DEFAULT null
);

CREATE TABLE account_feed_posts (
    account_id INT,
    post_id INT,
    PRIMARY KEY (account_id, post_id),
    CONSTRAINT fk_account FOREIGN KEY (account_id) REFERENCES accounts (id) ON DELETE CASCADE,
    CONSTRAINT fk_post FOREIGN KEY(post_id) REFERENCES posts (id) ON DELETE CASCADE,
    viewed_date TIMESTAMP
);