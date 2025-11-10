<?php

namespace App\Entity;

use App\Repository\RoomRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoomRepository::class)]
class Room
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\ManyToOne(inversedBy: 'rooms')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $createdBy = null;

    #[ORM\OneToMany(targetEntity: RoomUser::class, mappedBy: 'room')]
    private Collection $roomUsers;

    public function __construct()
    {
        $this->roomUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): static
    {
        $this->createdBy = $createdBy;

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
            $roomUser->setRoom($this);
        }

        return $this;
    }

    public function removeRoomUser(RoomUser $roomUser): static
    {
        if ($this->roomUsers->removeElement($roomUser)) {
            // set the owning side to null (unless already changed)
            if ($roomUser->getRoom() === $this) {
                $roomUser->setRoom(null);
            }
        }

        return $this;
    }
}
