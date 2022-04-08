CREATE TABLE account (
    email VARCHAR(40) UNIQUE NOT NULL,
    hashed_password CHAR(60) NOT NULL,
    first_name CHAR(20) NOT NULL,
    last_name CHAR(20) NOT NULL
);

CREATE TABLE post (
    FOREIGN KEY (account_id) REFERENCES account (account_id),
    title VARCHAR(20) NOT NULL,
    text_body VARCHAR(1024) NOT NULL
);

CREATE TABLE account_feed_posts (
    account_id INT NOT NULL,
    role_id INT NOT NULL,
    viewed_date TIMESTAMP,
    PRIMARY KEY (account_id, post_id),
    FOREIGN KEY (account_id) REFERENCES account (id),
    FOREIGN KEY (post_id) REFERENCES post (id),
);