<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Teachr;
use DateTime;

class TeachrController extends AbstractController
{
    /**
     * @Route("/teachr/{id}", name="teachr,methods={'GET'}")
     */
    public function getTeachrById(int $id): Response
    {
        $teachr = $this->getDoctrine()->getRepository(Teachr::class)->find($id);
        
        $name = $teachr->getFirstName();
        $date = $teachr->getCreationDate();
        
        return $this->json([
            'first_name' => $name,
             'creation_date' => $date
        ]);
    }


    /**
     * @Route("/teachr/create/{nom}", name="teachr,methods={'POST'}")
     */
    public function createTeachr(string $nom): Response
    {
        $teachr = new Teachr();
        $teachr->setFirstName($nom);
        $teachr->setCreationDate(new DateTime());
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($teachr);
        $entityManager->flush();
        return new Response("<H1>TEACH'R is created</H1>");
    }

      /**
     * @Route("/teachr/update/{id}/{nom}", name="teachr,methods={'PUT'}")
     */
    public function updateTeachr(int $id, string $nom): Response
    {
        $teachr = $this->getDoctrine()->getRepository(Teachr::class)->find($id);
        $teachr->setFirstName($nom);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($teachr);
        $entityManager->flush();
        return new Response("<H1>TEACH'R has been sucessfully updated</H1>");
    }
}
