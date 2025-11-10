<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    #[ORM\OneToMany(targetEntity: Room::class, mappedBy: 'createdBy')]
    private Collection $rooms;

    #[ORM\OneToMany(targetEntity: RoomUser::class, mappedBy: 'user')]
    private Collection $roomUsers;

    public function __construct()
    {
        $this->rooms = new ArrayCollection();
        $this->roomUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @return Collection<int, Room>
     */
    public function getRooms(): Collection
    {
        return $this->rooms;
    }

    public function addRoom(Room $room): static
    {
        if (!$this->rooms->contains($room)) {
            $this->rooms->add($room);
            $room->setCreatedBy($this);
        }

        return $this;
    }

    public function removeRoom(Room $room): static
    {
        if ($this->rooms->removeElement($room)) {
            // set the owning side to null (unless already changed)
            if ($room->getCreatedBy() === $this) {
                $room->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, RoomUser>
     */
    public function getRoomUsers(): Collection
    {
        return $this->roomUsers;
    }

    public function addRoomUser(RoomUser $roomUser): static
    {
        if (!$this->roomUsers->contains($roomUser)) {
            $this->roomUsers->add($roomUser);
            $roomUser->setUser($this);
        }

        return $this;
    }

    public function removeRoomUser(RoomUser $roomUser): static
    {
        if ($this->roomUsers->removeElement($roomUser)) {
            // set the owning side to null (unless already changed)
            if ($roomUser->getUser() === $this) {
                $roomUser->setUser(null);
            }
        }

        return $this;
    }
}
