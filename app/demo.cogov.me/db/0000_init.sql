CREATE TABLE person (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL
);

CREATE TABLE collective (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	description TEXT,
	details TEXT
);

CREATE TABLE council (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	collective_id INTEGER REFERENCES collective(id),
	collective_council INTEGER DEFAULT 0,
	name TEXT
);

CREATE TABLE member (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	collective_id INTEGER REFERENCES collective(id),
	person_id INTEGER REFERENCES person(id)
);

CREATE TABLE privilege_set (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	collective_id INTEGER REFERENCES collective(id),
	name TEXT
);

CREATE TABLE privilege (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	privilege_set_id INTEGER REFERENCES privilege_set(id),
	action_type TEXT
);

CREATE TABLE member_privilege (
	collective_id INTEGER,
	member_id INTEGER,
	privilege_set_id INTEGER
);

CREATE TABLE council_privilege (
	collective_id INTEGER,
	council_id INTEGER,
	privilege_set_id INTEGER
);

CREATE TABLE proposal (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	collective_id INTEGER,
	council_id INTEGER,
	name TEXT,
	date TEXT
);

CREATE TABLE proposal_revision (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	proposal_id INTEGER REFERENCES proposal(id),
	name TEXT,
	date TEXT
);

CREATE TABLE proposal_action (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	revision_id INTEGER REFERENCES proposal_revision(id),
	action_type TEXT,
	params TEXT
);
