CREATE TABLE IF NOT EXISTS campaigns (
  campaign_id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  customer_id varchar(255) NOT NULL,
  PRIMARY KEY (campaign_id)
);