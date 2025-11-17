<?php

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Annotation\Route;


class SecurityController extends AbstractController
{
    #[Route('/connect/keycloak', name: 'connect_keycloak')]
    public function connect(ClientRegistry $clients): Response
    {
        return $clients->getClient('keycloak')->redirect([], []);
    }

    #[Route('/connect/keycloak/check', name: 'connect_keycloak_check')]
    public function check(): Response
    {
        return $this->redirectToRoute('home');
    }
}
