terraform {
    required_providers {
      vultr = {
          source = "vultr/vultr"
          version = "2.11.2"
      }
    }
}

provider "vultr" {
    # Vultr API key in bashrc exportc
}

resource "vultr_instance" "beam_engineering" {
    plan  = var.one_cpu_one_gb_ram
    region = var.vultr_seattle
    app_id = var.ubuntu
    label = "beam"
    enable_ipv6 = true
    hostname = "beam"
    activation_email = false
    ddos_protection = false
    tags = ["beam", "andrewn", "joinbeam"]
}