CREATE TABLE IF NOT EXISTS example_tab (
    id SERIAL PRIMARY KEY,
    data TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO example_tab DEFAULT VALUES;
