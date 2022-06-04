terraform {
  required_providers {
    planetscale = {
      source = "s1ntaxe770r/planetscale"
      version = "0.2.0"
    }
  }
}

provider "planetscale" {

  access_token = var.access_token # optionally use PLANETSCALE_ACCESS_TOKEN env var

  service_token    = var.service_token    # optionally use PLANETSCALE_SERVICE_TOKEN env var
  service_token_id = var.service_token_id

  resource "planetscale_database" "db" {
    organization = "beam-engineering"
    name         = "beam"
  }
}