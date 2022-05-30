terraform {
  required_providers {
    planetscale = {
      source = "s1ntaxe770r/planetscale"
      version = "0.2.0"
    }
  }
}

provider "planetscale" {
  resource "planetscale_database" "db" {
    organization = "beam-engineering"
    name         = "beam"
  }

  output "database" {
    value = "us-east-1"
  }
}