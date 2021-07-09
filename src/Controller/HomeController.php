<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("", name="home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/la-pipe", name="laPipe")
     */
    public function laPipe(): Response
    {
        return $this->render('home/laPipe.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/le-cafe", name="leCafe")
     */
    public function leCafe(): Response
    {
        return $this->render('home/leCafe.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
