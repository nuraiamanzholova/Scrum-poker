<?php

namespace App\Controller;

use App\Entity\Room;
use App\Repository\RoomRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/rooms')]
class RoomController extends AbstractController
{
    // ----------------------------------------------
    // 1) Alle Räume abrufen
    // ----------------------------------------------
    #[Route('', name: 'rooms_list', methods: ['GET'])]
    public function list(RoomRepository $roomRepository): JsonResponse
    {
        $rooms = $roomRepository->findAll();

        $data = [];
        foreach ($rooms as $room) {
            $data[] = [
                'id' => $room->getId(),
                'name' => $room->getName(),
                'description' => $room->getDescription(),
                'createdBy' => $room->getCreatedBy()->getId(),
                'isPublic' => $room->isIsPublic(),
            ];
        }

        return $this->json($data);
    }

    // ----------------------------------------------
    // 2) Einzelnen Raum abrufen
    // ----------------------------------------------
    #[Route('/{id}', name: 'rooms_show', methods: ['GET'])]
    public function show(Room $room): JsonResponse
    {
        return $this->json([
            'id' => $room->getId(),
            'name' => $room->getName(),
            'description' => $room->getDescription(),
            'createdBy' => $room->getCreatedBy()->getId(),
            'isPublic' => $room->isIsPublic(),
        ]);
    }

    // ----------------------------------------------
    // 3) Neuen Raum erstellen
    // ----------------------------------------------
    #[Route('', name: 'rooms_create', methods: ['POST'])]
    public function create(
        Request $request,
        EntityManagerInterface $em,
    ): JsonResponse {
        // JSON Body aus dem Request lesen
        $data = json_decode($request->getContent(), true);

        // Neues Room-Objekt erstellen
        $room = new Room();
        $room->setName($data['name']);
        $room->setDescription($data['description'] ?? null);
        $room->setIsPublic($data['isPublic'] ?? false);

        // Beispiel: aktueller User ist der Ersteller
        $room->setCreatedBy($this->getUser());

        // Speichern
        $em->persist($room);
        $em->flush();

        // Antwort
        return $this->json(
            [
                'message' => 'Room created successfully',
                'id' => $room->getId(),
            ],
            201,
        );
    }
}
