CREATE TABLE account (
    email VARCHAR(40) PRIMARY KEY,
    hashed_password CHAR(60) NOT NULL,
    first_name CHAR(20) NOT NULL,
    last_name CHAR(20) NOT NULL
);

CREATE TABLE post (
    post_id VARCHAR(16) NOT NULL CONSTRAINT post_id_unique UNIQUE PRIMARY KEY,
    FOREIGN KEY (email) REFERENCES account (email),
    title VARCHAR(20) NOT NULL,
    text_body VARCHAR(1024) NOT NULL
);

CREATE TABLE feed (
    FOREIGN KEY (email) REFERENCES account (email),
    FOREIGN KEY (post_id) REFERENCES post (post_id),
)