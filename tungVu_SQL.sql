/* Tung Vu - Term Project SQL Script */

CREATE DATABASE IF NOT EXISTS tungvu;

/* Create MembershipTier Model */
CREATE TABLE IF NOT EXISTS tungvu.membership_tier (
	tier_code integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	tier_name varchar(75) NOT NULL, 
	tier_price double precision NOT NULL
);


/* Create Member Model */
CREATE TABLE IF NOT EXISTS tungvu.member (
	mem_id integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	mem_fname varchar(75) NOT NULL, 
	mem_lname varchar(75) NOT NULL, 
	mem_email varchar(75) NOT NULL, 
	mem_is_active bool NOT NULL, 
	mem_total_paid double precision NOT NULL, 
	tier_code integer NOT NULL,
    FOREIGN KEY (tier_code) REFERENCES tungvu.membership_tier(tier_code)
);
  

/* Create Facility Model */
CREATE TABLE IF NOT EXISTS tungvu.facility (
	fac_id integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	fac_name varchar(75) NOT NULL
);


/* Create Facility_Tier_Code Model (for many-to-many relationship) */
CREATE TABLE IF NOT EXISTS tungvu.shared_facility (
	id integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fac_id integer NOT NULL,
    tier_code integer NOT NULL,
    FOREIGN KEY (fac_id) REFERENCES tungvu.facility(fac_id),
    FOREIGN KEY (tier_code) REFERENCES tungvu.membership_tier(tier_code)
);

  
/* Create Employee Model */
CREATE TABLE IF NOT EXISTS tungvu.employee (
	emp_id integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	emp_fname varchar(75) NOT NULL, 
	emp_lname varchar(75) NOT NULL,
	emp_phone varchar(75) NOT NULL,
    fac_id integer NOT NULL,
    FOREIGN KEY (fac_id) REFERENCES tungvu.facility(fac_id)
);


/* Create Job Model */
CREATE TABLE IF NOT EXISTS tungvu.job (
	job_code integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	job_dec varchar(255) NOT NULL, 
	job_salary double precision NOT NULL,
	emp_id integer NOT NULL,
    FOREIGN KEY (emp_id) REFERENCES tungvu.employee(emp_id)
);


/* Create Equipment Model */
CREATE TABLE IF NOT EXISTS tungvu.equipment (
	equip_id integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	equip_name varchar(75) NOT NULL, 
	equip_quantity integer NOT NULL, 
	fac_id integer NOT NULL,
    FOREIGN KEY (fac_id) REFERENCES tungvu.facility(fac_id)
);














